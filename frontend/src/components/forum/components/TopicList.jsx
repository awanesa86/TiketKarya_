// src/components/forum/components/TopicList.jsx
import React from 'react';
import PropTypes from 'prop-types';
import TopicItem from './TopicItem';

// Mock data diperbarui sesuai dengan struktur baru di TopicItem.jsx
const MOCK_TOPICS = [
    { id: 1, author: 'Nabila Sari', username: 'nabilasari', avatar: 'https://placehold.co/40x40/FFC898/000000?text=N', title: 'What should I bring to a batik workshop?', replies: 4, lastPost: '6 months ago' },
    { id: 2, author: 'Goff A.', username: 'goffa', avatar: 'https://placehold.co/40x40/B6E2A1/000000?text=G', title: 'Looking for textile workshops happening this month', replies: 12, lastPost: '6 months ago' },
    { id: 3, author: 'Rani Putri', username: 'raniputri', avatar: 'https://placehold.co/40x40/FFACAC/000000?text=R', title: 'How long does it take to get your fired pottery back?', replies: 3, lastPost: '6 months ago' },
    { id: 4, author: 'Joko Rahman', username: 'jokorahman', avatar: 'https://placehold.co/40x40/B2A4FF/000000?text=J', title: 'Can I join a workshop even if I’m not artistic?', replies: 8, lastPost: '6 months ago' },
    { id: 5, author: 'Liliana Mar', username: 'lilianamar', avatar: 'https://placehold.co/40x40/A4EBF3/000000?text=L', title: 'Tools used at the hand embroidery class – full list', replies: 17, lastPost: '6 months ago' },
];

const TopicList = ({ topics = MOCK_TOPICS, loading, error }) => {
  if (loading) {
    return <p className="text-center py-10">Loading topics...</p>;
  }

  if (error) {
    return <p className="text-center py-10 text-red-500">Error: {error}</p>;
  }

  if (topics.length === 0) {
    return <p className="text-center py-10">No topics found.</p>;
  }

  return (
    <div className="space-y-3">
      {topics.map((topic) => (
        <TopicItem key={topic.id} topic={topic} />
      ))}
    </div>
  );
};

TopicList.propTypes = {
  topics: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
};


export default TopicList;
