export function incressProd() {
  if (prodsConfig.cantProdSelected < prodsConfig.maxProds) {
    ++prodsConfig.cantProdSelected;

    console.log('price ', plans);

    updateFinalPrice();
    updateCantProds();
  }
}

export function decreaseProd() {
  if (prodsConfig.cantProdSelected > prodsConfig.minProds) {
    --prodsConfig.cantProdSelected;
    console.log('price ', plans);
    updateFinalPrice();
    updateCantProds();
  }
}

export function updateAddPhotoPrice(planType) {
  const plan = plans.find((el) => {
    return el.type === planType;
  });

  const addPhotoIsChequed = document.getElementById(planType + '_photo').checked;

  if (addPhotoIsChequed) {
    plan.finalPrice = plan.finalPrice + basicArray[3].addPhoto * prodsConfig.cantProdSelected;

    saving =
      basicArray[2].priceBigProp * prodsConfig.cantProdSelected -
      basicArray[3].addPhoto * prodsConfig.cantProdSelected;
    plan.savings = plan.savings + saving;
  } else {
    plan.finalPrice = plan.finalPrice - basicArray[3].addPhoto * prodsConfig.cantProdSelected;

    saving =
      basicArray[2].priceBigProp * prodsConfig.cantProdSelected -
      basicArray[3].addPhoto * prodsConfig.cantProdSelected;
    plan.savings = plan.savings - saving;
  }

  /*if (addPhotoIsChequed) {
          price = plan.priceAddingPhoto
          saving = plan.savingAddingPhoto
        } else {
          price = plan.finalPrice
          saving = plan.savings
        }*/

  document.getElementById(plan.id).innerHTML = plan.finalPrice
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  document.getElementById(plan.id + 'Discont').innerHTML = plan.savings
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

export function updateAddAdaptationPrice(planType) {
  const plan = plans.find((el) => {
    return el.type === planType;
  });

  const addAdaptationIsChequed = document.getElementById(planType + '_adaptation').checked;

  if (addAdaptationIsChequed) {
    plan.finalPrice = plan.finalPrice + basicArray[3].addAdaptation * prodsConfig.cantProdSelected;

    //saving = (basicArray[2].priceBigProp * prodsConfig.cantProdSelected) - (basicArray[3].addAdaptation * prodsConfig.cantProdSelected)
    //plan.savings = plan.savings + saving;
  } else {
    plan.finalPrice = plan.finalPrice - basicArray[3].addAdaptation * prodsConfig.cantProdSelected;

    //saving = (basicArray[2].priceBigProp * prodsConfig.cantProdSelected) - (basicArray[3].addAdaptation * prodsConfig.cantProdSelected)
    //plan.savings = plan.savings - saving;
  }

  /*if (addAdaptationIsChequed) {
          price = plan.priceAddingAdaptation
          saving = plan.savingAddingAdaptation
        } else {
          price = plan.finalPrice
          saving = plan.savings
        }*/

  document.getElementById(plan.id).innerHTML = plan.finalPrice
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  //document.getElementById(plan.id + 'Discont').innerHTML=plan.savings.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
