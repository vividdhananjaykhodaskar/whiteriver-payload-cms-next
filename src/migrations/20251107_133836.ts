import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`footer_site_links_links\`;`)
  await db.run(sql`ALTER TABLE \`footer_site_links\` ADD \`title\` text NOT NULL;`)
  await db.run(sql`ALTER TABLE \`footer_site_links\` ADD \`order\` numeric NOT NULL;`)
  await db.run(sql`ALTER TABLE \`footer_site_links\` ADD \`url\` text NOT NULL;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`footer_site_links_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`url\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`footer_site_links\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`footer_site_links_links_order_idx\` ON \`footer_site_links_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`footer_site_links_links_parent_id_idx\` ON \`footer_site_links_links\` (\`_parent_id\`);`)
  await db.run(sql`ALTER TABLE \`footer_site_links\` DROP COLUMN \`title\`;`)
  await db.run(sql`ALTER TABLE \`footer_site_links\` DROP COLUMN \`order\`;`)
  await db.run(sql`ALTER TABLE \`footer_site_links\` DROP COLUMN \`url\`;`)
}
