function goBack(n) {
  window.history.go(n);
}

function toggleSubElement(e, openClass) {
  let element = document.querySelectorAll(e);
  element.forEach(el => {
    el.addEventListener('click', () => {
      el.classList.toggle(openClass);
    })
  })
}
toggleSubElement('.main-nav .main-nav--link', 'open-sub');

function showUploadImage(list) {
  function previewImages() {
    let list_image = document.querySelector('#list-upload-image');
    let input_file = list_image.firstChild;

    if (this.files) {
      [].forEach.call(this.files, readAndPreview);
    }

    function readAndPreview(file) {
      if (!/\.(jpe?g|png|gif)$/i.test(file.name)) {
        return alert(file.name + " is not an image");
      }
      let file_reader = new FileReader();
      file_reader.addEventListener("load", function () {
        let image = new Image();
        image.src = this.result;

        let item = document.createElement('div');
        let close = document.createElement('span');

        item.appendChild(image);
        item.appendChild(close);

        close.addEventListener("click", (e) => {
          e.target.parentNode.remove();
        });
        
        list_image.insertBefore(item, input_file);
      });

      file_reader.readAsDataURL(file);
    }
  }
  
  if (list) {
    document.querySelector(list).addEventListener("change", previewImages);
  }
}
showUploadImage('#upload-image');


