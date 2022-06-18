

/**
 * Facebook Application start here.
 * ================================
 */

const search = document.querySelector('.search');
const input = document.querySelector('input');
const icon = document.querySelector('i');
const toltip_wrapper = document.querySelector('.toltip_wrapper');


let count = 0;
input.onblur = () => {

    if(input.value == ''){
        search.style.borderColor = 'red';
        icon.style.display = 'block';
    }else{
        search.style.borderColor = 'black';
        icon.style.display = 'none';
    };

    count++;
    toltip_wrapper.style.display = 'none';

};

input.onfocus = () => {

    search.style.borderColor = 'black';
    icon.style.display = 'none';
   
    if( input.value == '' && count > 0 ){
        toltip_wrapper.style.display = 'block'
    }else{
        toltip_wrapper.style.display = 'none';
    };
    
};

input.onkeyup = () => {

    if( input.value == '' ){
        toltip_wrapper.style.display = 'block';
    }else{
        toltip_wrapper.style.display = 'none';
    };

};

// Facebook Application ends here.









/**
 * Dynamic Section style start here.
 * =================================
 */

const heading = document.getElementById('heading');
const section_output = document.getElementById('section_output');
const font_size = document.getElementById('font_size');
const font_color = document.getElementById('font_color');
const font_family = document.getElementById('font_family');
const align = document.querySelectorAll('.align');


heading.onkeyup = () => {

    section_output.innerHTML = heading.value;

};

align.forEach((element) => {
    element.onchange = () => {
        section_output.style.textAlign = element.value;
    }
});

font_size.oninput = () => {
    section_output.style.fontSize = font_size.value + "px"; 
};

font_color.oninput = () => {
    section_output.style.color = font_color.value;
};

font_family.onchange = () => {
    section_output.style.fontFamily = font_family.value;
};

// Dynamic Section style ends here.








/**
 * Form Submit part start here.
 * ============================
 */

const create_an_account = document.getElementById('create_an_account');

// form-submit
create_an_account.onsubmit = (e) => {

    e.preventDefault();

    // Get Element
    const name = create_an_account.querySelector('input[name="name"]');
    const email = create_an_account.querySelector('input[name="email"]');
    const phone = create_an_account.querySelector('input[name="phone"]');
    const user = create_an_account.querySelector('input[name="user"]');
    const password = create_an_account.querySelector('input[name="password"]');
    const msg = create_an_account.querySelector('.msg');

    // form-validation.
    if( name.value == '' || email.value == '' || phone.value == '' || user.value == '' || password.value == '' ){
        msg.innerHTML = setAlert('All fields are required!', 'danger')
    }else if( emailCheck(email.value) == false ){
        msg.innerHTML = setAlert('Invalid Email address', 'warning')
    }else if( phoneCheck(phone.value) == false ){
        msg.innerHTML = setAlert('Invalid Phone Number', 'warning')
    }else if( userCheck(user.value) == false ){
        msg.innerHTML = setAlert('Invalid User-Name', 'warning')
    }else if( passwordCheck(password.value) == false ){
        msg.innerHTML = setAlert('Invalid Password', 'warning')
    }else{
        msg.innerHTML = setAlert('Successfully Create an account.', 'success')
    }

};
// Form Submit part ends here.










/**
 * Biyer Boyos check application part start here.
 * ==============================================
 */
// Get Element.
const age_form = document.getElementById('age_form');

//form-submit.
age_form.onsubmit = (element) => {
    element.preventDefault();

    let name = age_form.querySelector('input[name="name"]');
    let age = age_form.querySelector('input[name="age"]');
    let gender = age_form.querySelectorAll('input[name="gender"]');
    // let gender = age_form.querySelector('input[name="gender"]:checked');
    let msg = age_form.querySelector('.msg');
    let msg_long = age_form.querySelector('.msg_long');

    let = gender_name ='';
    gender.forEach((item) => {
        if( item.checked ){
            gender_name = item.value
        };
    });

    // form-validation.
    if( name.value == '' || age.value == '' || gender_name.value == '' ){
        msg.innerHTML = setAlert('All fields are required', 'danger');
    }else if( numberCheck(age.value) == false ){
        msg.innerHTML = setAlert('Age is Invalid', 'warning');
    }else{

        msg_long.innerHTML = marriageAgeCheck( name.value, age.value, gender_name );
       
    };

};

// Biyer Boyos check application part ends here.








/**
 * Currency-Convert part start here.
 * ================================
 */


const currency_converter = document.getElementById('currency_converter');

currency_converter.onsubmit = (e) => {

    e.preventDefault();

    //Get Element.
    const amount = currency_converter.querySelector('input[name="amount"]');
    const currency = currency_converter.querySelector('select[name="currency"]');
    const msg = currency_converter.querySelector('.msg');
    const msg_long = currency_converter.querySelector('.msg_long');


    if( amount.value == '' || currency.value == '' ){
        msg.innerHTML = setAlert('All fields are required', 'danger');
    }else{

        msg_long.innerHTML = currencyCal(amount.value, currency.value);

    };
};

// Currency-Convert part ends here.






/**
 * Area-Calculation part start here.
 * ================================
 */
    const area_form = document.getElementById('area_form');
    const msg_long = area_form.querySelector('.msg_long');
    const area_type = area_form.querySelector('select[name="area_type"]');
    const tri = area_form.querySelector('.tri');
    const rec = area_form.querySelector('.rec');
    const cir = area_form.querySelector('.cir');
    const squ = area_form.querySelector('.squ');
    
    // Onchange statement.
    area_type.onchange = () => {

        if( area_type.value == 'triangle' ){
            tri.style.display = 'block'
        }else{
            tri.style.display = 'none'
        };


        if( area_type.value == 'rectangle' ){
            rec.style.display = 'block'
        }else{
            rec.style.display = 'none'
        };


        if( area_type.value == 'circle' ){
            cir.style.display = 'block'
        }else{
            cir.style.display = 'none'
        };


        if( area_type.value == 'square' ){
            squ.style.display = 'block'
        }else{
            squ.style.display = 'none'
        };

    };


    //form submit.
    area_form.onsubmit = (e) => {

        e.preventDefault();

        if( area_type.value == 'triangle' ){

            let base = area_form.querySelector('input[name="base"]').value;
            let height = area_form.querySelector('input[name="height"]').value;

            msg_long.innerHTML = areaCal( area_type.value, base, height );


        }else if( area_type.value == 'rectangle' ){

            let length = area_form.querySelector('input[name="length"]');
            let width = area_form.querySelector('input[name="width"]');

            msg_long.innerHTML = areaCal( area_type.value, length.value, width.value );

        }else if( area_type.value == 'circle' ){

            let radius = area_form.querySelector('input[name="radius"]');
            msg_long.innerHTML = areaCal( area_type.value, radius.value );


        }else if( area_type.value == 'square' ){

            let arm = area_form.querySelector('input[name="arm"]');
            msg_long.innerHTML = areaCal( area_type.value, arm.value );

        };


    };
    


//  Area-Calculation part ends here.









