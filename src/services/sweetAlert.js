import Swal from "sweetalert2";


export const sweetAlertMixin = (
  type,
  text
) => {
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
    icon: `${type}`,
    title: `${text}`,
  });
};


export const sweetAlertConfirm = async () => {
      const alerta = Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

       const response = await alerta;

       if(response.isConfirmed){
        Swal.fire("Deleted!", "Your dish has been deleted.", "success");
       }

      return response.isConfirmed;
}

