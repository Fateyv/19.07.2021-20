const STICKER_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers/';

const template = document.getElementById('stickerItemTemplate').innerHTML;
const stickerList = document.getElementById('list__stickers');
const newTextareaStickerEl = document.getElementById('newTextareaSticker');
const addStickerEl = document.getElementById('add__sticker');
const deleteStickerEl = document.getElementById('delete__sticker');

let stickersArr = [];

init();

function init() {
    fetchSticker();
}

function fetchSticker() {
    fetch(STICKER_URL)
    .then((resp) => resp.json())
    .then()
}


