$(document).ready(function () {

  $("#addProduct").on('submit', async function (event) {
    event.preventDefault();

    const fileInput = document.getElementById('imageInput').files[0];
    if (!fileInput) {
        alert('Please select an image.');
        return;
    }

    const formData = new FormData();
    formData.append("image", fileInput);
    formData.append("name", $("#iname").val());
    formData.append("price", $("#price").val());
    formData.append("category", $("#category").val());

    try {
        const response = await fetch('/ajouter_produit', {
            method: 'POST',
            body: formData, // No need for JSON headers
        });

        if (!response.ok) throw new Error('Upload failed.');

        const result = await response.json();
        alert(result.message);
    } catch (error) {
        console.error("Upload Error:", error);
        alert("An error occurred while uploading the image.");
    }
});

})

//code for futur updates





  // $.get("/get_produits", function (data) {

  //   data.forEach(product => {
  //     $("#inventory").append(`
  //       <div class="card text-bg-dark mt-4 product"  style="width: 18rem;" data-id="${product.id}">
  //           <img src="images/breads2.jpg" class="card-img-top" alt="...">
  //           <div class="card-body">
  //               <h5 class="card-title silk">${product.name} ${product.price}$</h5>
                
  //                 <a class="btn btn-silk edit">Edit</a>
  //                 <a class="btn btn-danger">Delete</a>
                
  //           </div>
  //       </div>`);
  //   });
  // }).fail(function () {
  //   console.error("Failed to load products.");
  // });


  // $(document).on('click', '.btn-danger', function () {
  //   var productId = $(this).closest('.product').data('id');


  //   $.ajax({
  //     url: `api/deleteProduct/${productId}`,
  //     type: 'DELETE',

  //     success: function (result) {
  //       alert("product removed!");
  //     }

  //   });
  //   $(this).closest('.card').remove();
  // });

  // $(document).on('click','.edit', ()=>{

  // })

  