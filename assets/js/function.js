/**
 *  Alert Function.
 * ================
 */
const setAlert = (msg, type='danger') => {
    return `<p class="alert alert-${type} d-flex justify-content-between"> ${msg} <button data-bs-dismiss = 'alert' class="btn btn-close"></button> </p>`
};

/**
 *  Email-Check function.
 * ======================
 */
const emailCheck = (email) => {
    let pattern = /^[a-z\._0-9]{1,}@[a-z0-9]{1,}\.[a-z]{1,4}$/
    return pattern.test(email)
};


/**
 *  Bangladeshi Phone Number Check function.
 * =========================================
 */
 const phoneCheck = (phone) => {
    let pattern = /^(01|\+8801)[0-9]{9}$/
    return pattern.test(phone)
};


/**
 *  User-Name check function.
 * ==========================
 */
const userCheck = (user) => {
    let pattern = /^[A-Za-z_0-9@#_$&]{4,15}$/;
    return pattern.test(user)
};

/**
 *  Password check function.
 * =========================
 */
 const passwordCheck = (password) => {
    let pattern = /^[A-Za-z_0-9@#_$&%]{8,15}$/;
    return pattern.test(password)
};


/**
 *   Age is number or not a number Check.
 * ======================================
 */

const numberCheck = (number) => {
    let pattern = /^[0-9]{1,3}$/
    return pattern.test(number)
};


/**
 *  Marriage age culculations functions.
 * =====================================
 */

const marriageAgeCheck = ( name, age, gender ) => {


    if( gender == 'male' ){

        if( age >= 21 ){
            return setAlert(`Hi ${ name } vaiya, apnar biyer boyos hoice. apnake congratulations.`, 'success')
        }else{
            return setAlert(`Hi ${ name } vaiya, apnar biyer boyos akhono hoini. apnake biye korte hole aro ${ 21-age } bochor oppekha korte hobe.`, 'danger')
        };

    }else{

        if( age >= 18 ){
            return setAlert(`Hi ${ name } apu, apnar biyer boyos hoice. apnake congratulations.`, 'success')
        }else{
            return setAlert(`Hi ${ name } apu, apnar biyer boyos akhono hoini. apnake biye korte hole aro ${ 18-age } bochor oppekha korte hobe.`, 'danger')
        };

    };
};




/**
 *  Currency Converter function.
 * =============================
 */
 
const currencyCal = ( amount, currency ) => {

    let rate = 0;

    switch (currency) {

        case 'usd':
            rate = 93.03;
            break;
        case 'cad':
            rate = 72.84;
            break;
        case 'euro':
            rate = 97.86;
            break;
        case 'pound':
            rate = 114.56;
            break;
        case 'rupee':
            rate = 1.19;
            break; 
        default:
            break;
    };

    let final_amount = Math.round(amount*rate);

    return setAlert(` ${amount} ${ currency } = ${ final_amount } BDT.`, 'success')

};







/**
 *  Area-Calculation function.
 * ===========================
 */

    const areaCal = ( type, val1, val2 = '' ) => {

        if( type == 'triangle' ){
            return setAlert(`The are of Triangle is ${ .5 * val1 * val2 } square meeter.`, 'success');
        }else if( type == 'rectangle' ){
            return setAlert(`The area of Rectangle is ${ val1 * val2 }`, 'success');
        }else if( type == 'circle' ){
            return setAlert(`The area of Circle is ${ 3.1416 * val1 * val1 }`, 'success');
        }else if( type == 'square' ){
            return setAlert(`The area of Square is ${ val1 * val1 }`, 'success');
        };

    };









