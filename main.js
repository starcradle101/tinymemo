let allMemo = JSON.parse(localStorage.getItem('allMemo'));
allMemo = allMemo ?? [];
render();

function saveNote() {
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  let date = new Date().getDay();
  switch (date) {
    case 0:
      date = '일요일';
      break;
    case 1:
      date = '월요일';
      break;
    case 2:
      date = '화요일';
      break;
    case 3:
      date = '수요일';
      break;
    case 4:
      date = '목요일';
      break;
    case 5:
      date = '금요일';
      break;
    case 6:
      date = '토요일';
      break;
  }

  allMemo.push({ title, content, date: date, len: allMemo.length });

  localStorage.setItem('allMemo', JSON.stringify(allMemo));
  render();
}

function render() {
  const display = document.querySelector('.section-displayMemo');
  display.innerHTML = '';

  for (let i = allMemo.length - 1; i >= 0; i--) {
    const item = allMemo[i];
    const memoContainer = document.createElement('div');
    memoContainer.classList.add('memo');

    const saveTitle = document.createElement('h2');
    const saveContent = document.createElement('p');
    const saveId = document.createElement('p');
    const deleteMemoBtn = document.createElement('button');
    // 모달 추가
    // const openModalBtn = document.createElement('button');

    saveTitle.textContent = item.title;
    saveContent.textContent = item.content;
    saveId.textContent = item.date;
    deleteMemoBtn.textContent = '삭제';
    deleteMemoBtn.setAttribute('id', item.len);
    deleteMemoBtn.setAttribute('onclick', 'remove()');
    // 모달 추가
    // openModalBtn.textContent = '더보기';
    // openModalBtn.setAttribute('class', 'modalInactive');

    memoContainer.appendChild(saveId);
    memoContainer.appendChild(saveTitle);
    memoContainer.appendChild(saveContent);
    memoContainer.appendChild(deleteMemoBtn);
    // 모달 추가
    // memoContainer.appendChild(openModalBtn);

    const sectionDisplayMemo = document.querySelector('.section-displayMemo');
    sectionDisplayMemo.appendChild(memoContainer);
  }
}

function remove() {
  // console.log(event.srcElement.id);
  // console.log(allMemo);
  const idx = allMemo.find((item) => item.len == event.target.id);
  if (idx) {
    allMemo.splice(
      allMemo.findIndex((item) => item.len == idx.len),
      1
    );
  }
  localStorage.setItem('allMemo', JSON.stringify(allMemo));
  render();
}

// // openModalBtn 버튼 클릭 이벤트 핸들러
// openModalBtn.addEventListener('click', function () {
//   const memoContainer = this.parentNode; // 버튼의 부모 요소인 memoContainer div
//   const title = memoContainer.querySelector('h2').textContent; // memoContainer div 내부의 h2 요소의 텍스트 내용
//   const content = memoContainer.querySelector('p').textContent; // memoContainer div 내부의 p 요소의 텍스트 내용
//   const date = memoContainer.querySelector('p').textContent; // memoContainer div 내부의 p 요소의 텍스트 내용
//   openModalBtn.classList.remove('modalInactive');
//   openModalBtn.classList.add('modalActive');
// });

// // 일단 모달창은 숨겨져있어야 한다.
// // 더보기 버튼을 클릭하면, 다음과 같은 알고리즘이 실행된다:
// // 1. 클릭한 버튼의 위치를 찾는다.
// // 2. 해당 버튼이 있는 div 내부의 정보가 모달 내부 메모에 박힌다
// // 3. 이후 모달이 켜진다 (display가 none에서 block으로)
