import Swal from 'sweetalert2';



export const errorMessage = (error) =>{

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

  return Toast.fire({
      icon: "error",
      title: `${error}`
    });
  
    
}
