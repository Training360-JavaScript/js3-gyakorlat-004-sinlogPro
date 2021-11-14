const checkVisa = (numberVisa) => {
    // A Visa kártyaszámnak '4'-gyel kell kezdődnie.
    const pattern = /^4\d{3} ?(\d{4} ?){2}\d{4}$/;
    return numberVisa.match(pattern) ? true : false;
}

export default checkVisa;