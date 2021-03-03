(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-open]'),
        closeModalBtn: document.querySelector('[data-modal-close]'),
        modal: document.querySelector('[data-modal]'),
        openModalMBtn: document.querySelector('[menu-modal-open]'),
        closeModalMBtn: document.querySelector('[menu-modal-close]'),
        modalM: document.querySelector('[menu-modal]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    refs.openModalMBtn.addEventListener('click', toggleMenu);
    refs.closeModalMBtn.addEventListener('click', toggleMenu);

    function toggleModal() {
        refs.modal.classList.toggle('is_hidden');
    }

    function toggleMenu() {
        refs.modalM.classList.toggle('is-open');
    }
})();