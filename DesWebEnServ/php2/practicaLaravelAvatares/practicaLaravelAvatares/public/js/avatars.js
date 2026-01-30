function previewImagen(event) {
    const input = event.target;
    const preview = document.getElementById('preview');
    const text = document.getElementById('preview-text');

    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            preview.src = e.target.result;
            preview.classList.remove('d-none');
            if(text != null) text.classList.remove('d-none');
        };

        reader.readAsDataURL(input.files[0]);
    }
}