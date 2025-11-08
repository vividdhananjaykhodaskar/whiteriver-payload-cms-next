import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  // Drop old relation table safely
  await db.run(sql`DROP TABLE IF EXISTS \`footer_site_links_links\`;`)

  // Check whether main table exists
  const table = await db.get(
    sql`SELECT name FROM sqlite_master WHERE type='table' AND name='footer_site_links';`
  )

  if (!table) {
    console.log("⚠️ footer_site_links does not exist — skipping ALTER TABLE")
    return
  }

  await db.run(sql`ALTER TABLE \`footer_site_links\` ADD \`title\` text;`)
  await db.run(sql`ALTER TABLE \`footer_site_links\` ADD \`order\` numeric;`)
  await db.run(sql`ALTER TABLE \`footer_site_links\` ADD \`url\` text;`)
}

// D1 cannot DROP columns → leave blank
export async function down({}: MigrateDownArgs): Promise<void> {
  // No-op — D1 doesn't support DROP COLUMN
}
