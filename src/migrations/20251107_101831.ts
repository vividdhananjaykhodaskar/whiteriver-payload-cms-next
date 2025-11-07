import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`magazines\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`tagline\` text NOT NULL,
  	\`logo_id\` integer NOT NULL,
  	\`website_url\` text NOT NULL,
  	\`shop_url\` text NOT NULL,
  	\`order\` numeric NOT NULL,
  	\`is_active\` integer DEFAULT true,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`magazines_logo_idx\` ON \`magazines\` (\`logo_id\`);`)
  await db.run(sql`CREATE INDEX \`magazines_updated_at_idx\` ON \`magazines\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`magazines_created_at_idx\` ON \`magazines\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`navigation\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`url\` text NOT NULL,
  	\`order\` numeric NOT NULL,
  	\`is_external\` integer DEFAULT false,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`navigation_updated_at_idx\` ON \`navigation\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`navigation_created_at_idx\` ON \`navigation\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`services_subtitles\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`services\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`services_subtitles_order_idx\` ON \`services_subtitles\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`services_subtitles_parent_id_idx\` ON \`services_subtitles\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`services\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`icon_id\` integer NOT NULL,
  	\`order\` numeric NOT NULL,
  	\`animation_delay\` text DEFAULT '0.2s',
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`icon_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`services_icon_idx\` ON \`services\` (\`icon_id\`);`)
  await db.run(sql`CREATE INDEX \`services_updated_at_idx\` ON \`services\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`services_created_at_idx\` ON \`services\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`sister_sites\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`url\` text NOT NULL,
  	\`order\` numeric NOT NULL,
  	\`is_active\` integer DEFAULT true,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`sister_sites_updated_at_idx\` ON \`sister_sites\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`sister_sites_created_at_idx\` ON \`sister_sites\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`payload_kv\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`key\` text NOT NULL,
  	\`data\` text NOT NULL
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`payload_kv_key_idx\` ON \`payload_kv\` (\`key\`);`)
  await db.run(sql`CREATE TABLE \`contact_info\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`company_name\` text DEFAULT 'White River Productions' NOT NULL,
  	\`address_street\` text DEFAULT 'PO Box 48' NOT NULL,
  	\`address_city\` text DEFAULT 'Bucklin' NOT NULL,
  	\`address_state\` text DEFAULT 'MO' NOT NULL,
  	\`address_zip\` text DEFAULT '64631' NOT NULL,
  	\`phones_toll_free\` text DEFAULT '(877) 787-2467' NOT NULL,
  	\`phones_overseas\` text DEFAULT '(816) 285-6560' NOT NULL,
  	\`emails_customer_service\` text DEFAULT 'info@whiteriverproductions.com' NOT NULL,
  	\`emails_subscriptions\` text DEFAULT 'subs@whiteriverproductions.com' NOT NULL,
  	\`emails_webmaster\` text DEFAULT 'webmaster@whiteriverproductions.com' NOT NULL,
  	\`social_media_facebook\` text DEFAULT 'https://www.facebook.com/WhiteRiverProductions',
  	\`updated_at\` text,
  	\`created_at\` text
  );
  `)
  await db.run(sql`CREATE TABLE \`hero_section\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`main_heading\` text DEFAULT 'WELCOME TO WHITE RIVER PRODUCTIONS' NOT NULL,
  	\`sub_heading\` text DEFAULT 'IF YOU LIKE RAILROADS, YOU''RE IN THE RIGHT PLACE' NOT NULL,
  	\`background_image_id\` integer NOT NULL,
  	\`updated_at\` text,
  	\`created_at\` text,
  	FOREIGN KEY (\`background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`hero_section_background_image_idx\` ON \`hero_section\` (\`background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`site_settings\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`site_logo_id\` integer NOT NULL,
  	\`copyright_text\` text DEFAULT 'White River Productions',
  	\`section_headings_services\` text DEFAULT 'Our Services',
  	\`section_headings_magazines\` text DEFAULT 'Our Magazines',
  	\`section_headings_contact\` text DEFAULT 'Get in touch',
  	\`section_headings_other_sites\` text DEFAULT 'Our Other Sites',
  	\`updated_at\` text,
  	\`created_at\` text,
  	FOREIGN KEY (\`site_logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`site_settings_site_logo_idx\` ON \`site_settings\` (\`site_logo_id\`);`)
  await db.run(sql`ALTER TABLE \`payload_locked_documents_rels\` ADD \`magazines_id\` integer REFERENCES magazines(id);`)
  await db.run(sql`ALTER TABLE \`payload_locked_documents_rels\` ADD \`navigation_id\` integer REFERENCES navigation(id);`)
  await db.run(sql`ALTER TABLE \`payload_locked_documents_rels\` ADD \`services_id\` integer REFERENCES services(id);`)
  await db.run(sql`ALTER TABLE \`payload_locked_documents_rels\` ADD \`sister_sites_id\` integer REFERENCES sister_sites(id);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_magazines_id_idx\` ON \`payload_locked_documents_rels\` (\`magazines_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_navigation_id_idx\` ON \`payload_locked_documents_rels\` (\`navigation_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_services_id_idx\` ON \`payload_locked_documents_rels\` (\`services_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_sister_sites_id_idx\` ON \`payload_locked_documents_rels\` (\`sister_sites_id\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`magazines\`;`)
  await db.run(sql`DROP TABLE \`navigation\`;`)
  await db.run(sql`DROP TABLE \`services_subtitles\`;`)
  await db.run(sql`DROP TABLE \`services\`;`)
  await db.run(sql`DROP TABLE \`sister_sites\`;`)
  await db.run(sql`DROP TABLE \`payload_kv\`;`)
  await db.run(sql`DROP TABLE \`contact_info\`;`)
  await db.run(sql`DROP TABLE \`hero_section\`;`)
  await db.run(sql`DROP TABLE \`site_settings\`;`)
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
  await db.run(sql`CREATE TABLE \`__new_payload_locked_documents_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	\`media_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_locked_documents\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`media_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_payload_locked_documents_rels\`("id", "order", "parent_id", "path", "users_id", "media_id") SELECT "id", "order", "parent_id", "path", "users_id", "media_id" FROM \`payload_locked_documents_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents_rels\`;`)
  await db.run(sql`ALTER TABLE \`__new_payload_locked_documents_rels\` RENAME TO \`payload_locked_documents_rels\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_order_idx\` ON \`payload_locked_documents_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_parent_idx\` ON \`payload_locked_documents_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_path_idx\` ON \`payload_locked_documents_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_users_id_idx\` ON \`payload_locked_documents_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_media_id_idx\` ON \`payload_locked_documents_rels\` (\`media_id\`);`)
}
