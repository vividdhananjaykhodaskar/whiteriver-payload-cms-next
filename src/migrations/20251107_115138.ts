import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`about_us_magazine_covers\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`cover_image_id\` integer NOT NULL,
  	FOREIGN KEY (\`cover_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`about_us\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`about_us_magazine_covers_order_idx\` ON \`about_us_magazine_covers\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`about_us_magazine_covers_parent_id_idx\` ON \`about_us_magazine_covers\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`about_us_magazine_covers_cover_image_idx\` ON \`about_us_magazine_covers\` (\`cover_image_id\`);`)
  await db.run(sql`CREATE TABLE \`about_us_stats\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`highlight_text\` text NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`about_us\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`about_us_stats_order_idx\` ON \`about_us_stats\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`about_us_stats_parent_id_idx\` ON \`about_us_stats\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`about_us\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`section_label\` text DEFAULT 'ABOUT US' NOT NULL,
  	\`title\` text DEFAULT 'Your home for quality railroad books and magazines! All aboard!' NOT NULL,
  	\`cta_label\` text DEFAULT 'More About Us' NOT NULL,
  	\`cta_url\` text DEFAULT '/about' NOT NULL,
  	\`is_active\` integer DEFAULT true,
  	\`updated_at\` text,
  	\`created_at\` text
  );
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`about_us_magazine_covers\`;`)
  await db.run(sql`DROP TABLE \`about_us_stats\`;`)
  await db.run(sql`DROP TABLE \`about_us\`;`)
}
