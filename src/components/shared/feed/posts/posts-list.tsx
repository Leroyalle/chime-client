import React from 'react';
import { cn } from '@/lib/utils';
import { PostItem } from '../../post-item';
import { Post } from '../../../../../@types/dto';

interface Props {
  items?: Post[];
  className?: string;
}

export const PostsList: React.FC<Props> = ({ items, className }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className={cn('', className)}>
      {items.map((item) => (
        <PostItem
          key={item.id}
          postId={item.id}
          fullName={item.author.name}
          createdAt={item.createdAt}
          content={item.content}
          imageUrl={item.imageUrl}
          likeCount={item.likesCount}
          commentCount={item.commentsCount}
          sharedCount={0}
          isLiked={item.isLiked}
          className="mb-10"
        />
      ))}
    </section>
  );
};
