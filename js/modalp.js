(() => {
    const refs = {
        openModalMBtn: document.querySelector('[menu-modal-open]'),
        closeModalMBtn: document.querySelector('[menu-modal-close]'),
        modalM: document.querySelector('[menu-modal]'),
    };
    refs.openModalMBtn.addEventListener('click', toggleModal);
    refs.closeModalMBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modalM.classList.toggle('is-open');
    }
})();