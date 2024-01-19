import {
  uuid,
  pgTable,
  text,
  integer,
  pgEnum,
} from 'drizzle-orm/pg-core';

export const statusEum = pgEnum('status', [
  'suggestion',
  'planned',
  'in-progress',
  'live',
]);

export const categoryEnum = pgEnum('category', [
  'enhancement',
  'feature',
  'bug',
  'ui',
  'ux',
]);

export const feedback = pgTable('feedback', {
  feedbackId: uuid('feedback_id').primaryKey(),
  status: statusEum('status').notNull(),
  category: categoryEnum('category').notNull(),
  upvotes: integer('upvotes').notNull(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  commentCount: integer('comment_count').notNull(),
});

export const comments = pgTable('comments', {
  commentId: uuid('comment_id').primaryKey(),
  content: text('content').notNull(),
  imageUrl: text('image_url').notNull(),
  fullName: text('fullname').notNull(),
  username: text('username').notNull(),
  feedbackId: uuid('feedback_id').notNull(),
});

export type Feedback = typeof feedback.$inferSelect;
export type NewFeedback = typeof feedback.$inferInsert;

export type Comment = typeof comments.$inferSelect;
export type NewComment = typeof comments.$inferInsert;
