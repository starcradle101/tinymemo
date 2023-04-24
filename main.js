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
    // 맨 뒤 요소부터 출력
    const item = allMemo[i];
    const memoContainer = document.createElement('div');
    memoContainer.classList.add('memo');

    const saveTitle = document.createElement('h2');
    const saveContent = document.createElement('p');
    const saveId = document.createElement('p');
    const deleteMemoBtn = document.createElement('button');

    saveTitle.textContent = item.title;
    saveContent.textContent = item.content;
    saveId.textContent = item.date;
    deleteMemoBtn.textContent = '삭제';
    deleteMemoBtn.setAttribute('id', item.len);
    deleteMemoBtn.setAttribute('onclick', 'remove()');

    memoContainer.appendChild(saveId);
    memoContainer.appendChild(saveTitle);
    memoContainer.appendChild(saveContent);
    memoContainer.appendChild(deleteMemoBtn);

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
