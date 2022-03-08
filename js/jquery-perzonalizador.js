$(document).ready(function(){
    $('a').click(function(e){
      e.preventDefault()
  
     let pagina = $(this).attr('href')
  
     $('.modal-title').empty()
     $('.modal-body').empty()
  
     switch(pagina){
       case'Lamborghini Urus':
        $('.modal-title').append('Lamborghini Urus') 
        $('.modal-body').append('<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nostrum ex placeat minima quisquam illum rem doloribus tenetur, enim, quidem iure deleniti sint laborum nulla excepturi dignissimos maxime id numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>')
        break
       case'Ford Mustang': 
        $('.modal-title').append('Ford Mustang')
        $('.modal-body').append('<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nostrum ex placeat minima quisquam illum rem doloribus tenetur, enim, quidem iure deleniti sint laborum nulla excepturi dignissimos maxime id numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>')
        break
       case'Chevrolet Camaro': 
        $('.modal-title').append('Chevrolet Camaro') 
        $('.modal-body').append('<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nostrum ex placeat minima quisquam illum rem doloribus tenetur, enim, quidem iure deleniti sint laborum nulla excepturi dignissimos maxime id numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>')
        break
       default: alert('Pagina não encontrada')
     }
  
      $('#modal-info').modal('show')
  
    })
    
  })