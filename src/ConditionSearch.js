import React, { useState } from 'react';
import './ConditionSearch.css';

function ConditionSearch() {

  const [isMaleChecked, setIsMaleChecked] = useState(false);
  const [isFemaleChecked, setIsFemaleChecked] = useState(false);

  const handleMaleChange = () => {
    setIsMaleChecked(true);
    setIsFemaleChecked(false);
  };

  const handleFemaleChange = () => {
    setIsMaleChecked(false);
    setIsFemaleChecked(true);
  };

  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [numClothes, setNumClothes] = useState(0);

  function toggleModal() {
    setShowModal(!showModal);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: Handle form submission
    console.log('ID:', id);
    console.log('Gender:', gender);
    console.log('Height:', height);
    console.log('Weight:',weight);
    console.log('Num Clothes:', numClothes);
    toggleModal();
  }

  return (
    <div className="section">
      <button onClick={toggleModal}>조건 검색</button>
      {showModal && (
        <div className="modal-background">
          <div className="modal">
            <h2>조건 검색</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="id">ID:</label>
              <input type="int" id="id" value={id} onChange={(e) => setId(e.target.value)} />
              <br />
              <label htmlFor="gender">성별:</label>
                <div className="gender-container">
                <label htmlFor="male">
                    <input
                    type="checkbox"
                    id="male"
                    name="gender"
                    value="male"
                    checked={isMaleChecked}
                    onChange={handleMaleChange}
                    />
                    남성
                </label>
                <label htmlFor="female">
                    <input
                    type="checkbox"
                    id="female"
                    name="gender"
                    value="female"
                    checked={isFemaleChecked}
                    onChange={handleFemaleChange}
                    />
                    여성
                </label>
                </div>
              <br />
              <br />
                <label htmlFor="height">키:</label>
                <br />
                <input type="text" id="height" value={height} onChange={(e) => setHeight(e.target.value)} />
                <br />
                <label htmlFor="weight">몸무게:</label>
                <br />
                <input type="text" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)}  />
                <br />
              <label htmlFor="num-clothes">옷장에 있는 옷 수:</label>
              <select id="num-clothes" value={numClothes} onChange={(e) => setNumClothes(Number(e.target.value))}>
                <option value="1">1 세트</option>
                <option value="2">2 세트</option>
                <option value="3">3 세트</option>
                <option value="4">4 세트</option>
                <option value="5">5 세트 이상</option>
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

export default ConditionSearch;
