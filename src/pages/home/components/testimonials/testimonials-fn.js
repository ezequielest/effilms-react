export function backWhatsapp() {
  let widthBody = document.body.clientWidth;
  if (widthBody <= 776) {
    let containerListWhatsapp = document.getElementsByClassName('container-list-whatsapp')[0];
    containerListWhatsapp.setAttribute('style', 'display: block');

    let whatsappChats = document.getElementsByClassName('whatsapp');
    for (let item of whatsappChats) {
      if (item) {
        item.setAttribute('style', 'display: none');
      }
    }
  }
}

export function whatsappCustomer(customer, first) {
  let widthBody = document.body.clientWidth;
  if (widthBody <= 776) {
    if (first) {
      let containerListWhatsapp = document.getElementsByClassName('container-list-whatsapp')[0];

      if (containerListWhatsapp) {
        containerListWhatsapp.setAttribute('style', 'display: block');
      }

      let whatsappChat = document.getElementsByClassName('whatsapp ' + customer)[0];
      if (whatsappChat) {
        whatsappChat.setAttribute('style', 'display: none');
      }
    } else {
      let containerListWhatsapp = document.getElementsByClassName('container-list-whatsapp')[0];
      if (containerListWhatsapp) {
        containerListWhatsapp.setAttribute('style', 'display: none');
      }

      let whatsappChat = document.getElementsByClassName('whatsapp ' + customer)[0];
      if (whatsappChat) {
        whatsappChat.setAttribute('style', 'display: block');
      }
    }
  }

  showSelectMessage(customer);
}

export function showSelectMessage(customer) {
  let allElements = document.getElementsByClassName('whatsapp');

  for (let item of allElements) {
    if (item) {
      item.classList.add('hide');
    }
  }

  if (document.getElementsByClassName('whatsapp ' + customer).length > 0) {
    document.getElementsByClassName('whatsapp ' + customer)[0].classList.remove('hide');
  }

  let allElementsCustomer = document.getElementsByClassName('customer');

  for (let item of allElementsCustomer) {
    if (item) {
      item.classList.remove('selected-customer');
    }
  }
  if (document.getElementsByClassName('whatsapp ' + customer).length > 0) {
    document.getElementsByClassName('customer ' + customer)[0].classList.add('selected-customer');
  }
}
