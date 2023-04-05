import React, { useState } from 'react';
import './FriendSearch.css';

function FriendSearch() {
  const [showModal, setShowModal] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState('');

  function toggleModal() {
    setShowModal(!showModal);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: Handle form submission
    console.log('Selected Friend:', selectedFriend);
    toggleModal();
  }

  return (
    <div className="section">
      <button onClick={toggleModal}>친구 검색</button>
      {showModal && (
        <div className="modal-background">
          <div className="modal">
            <h2>친구 검색</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="friend">친구:</label>
              <select id="friend" value={selectedFriend} onChange={(e) => setSelectedFriend(e.target.value)}>
                <option value="">-- 친구를 선택하세요 --</option>
                <option value="friend1">친구1</option>
                <option value="friend2">친구2</option>
                <option value="friend3">친구3</option>
                {/* Add more options for other friends */}
              </select>
              <br />
              <button type="submit">검색</button>
              <button type="button" onClick={toggleModal}>취소</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default FriendSearch;
