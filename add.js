const STICKER_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers/';

const template = document.getElementById('stickerItemTemplate').innerHTML;
const stickerList = document.getElementById('list__stickers');
const newTextareaStickerEl = document.getElementById('newTextareaSticker');
const addStickerEl = document.getElementById('add__sticker');
const deleteStickerEl = document.getElementById('delete__sticker');


let stickersArr = [];

// stickerList.addEventListener('focusout', outSticker)
addStickerEl.addEventListener('click', onAddStickerClick);
// stickerList.addEventListener('click', onDeleteStickerClick);

function onAddStickerClick(event) {
    event.preventDefault();
    submitForm();
}

// function onDeleteStickerClick(event) {
//     const stickerId = getStickerId(event.target);
//     if (event.target.classList.contains('delete__btn')) {
//         deleteSticker(stickerId);
//     }
// }

// function getContactId(el) {
//     return el.closest('.sticker__item').dataset.stickerId;
// }

init();

function init() {
    fetchSticker();
}

function fetchSticker() {
    fetch(STICKER_URL)
    .then((resp) => resp.json())
    .then(setStickers)
    .then(renderList)
}

function setStickers(data) {
    return (stickersArr = data);
}

function renderList(list){
    stickerList.innerHTML = list.map(getItemHtml).join('');
}

function getItemHtml({description, id}) {
    return template
    .replace('{{description}}', description)
    .replace('{{id}}', id);
}

function submitForm() {
    const newSticker = getFormData()
    createSticker(newSticker);
}

function getFormData() {
    return { description: ''}
}

function createSticker(newSticker) {
    fetch(STICKER_URL, {
        method: 'POST',
        body: JSON.stringify(newSticker),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(resp => resp.json())
    .then(addSticker)
}

function addSticker(sticker) {
    stickersArr.push(sticker);
    renderList(stickersArr)
}

// function deleteSticker(id) {
//     fetch(STICKER_URL + id, {
//         method: 'DELETE',
//     }).then(() => {
//         stickersArr = stickersArr.filter((item) => (item.id !== id));
//         renderList(stickersArr)});
// }

// function outSticker() {
//     const changeSticker = getChangeSticker()
//     // saveSticker(changeSticker)
// }

// function getChangeSticker() {
//     return { description: newTextareaStickerEl.value }
// }