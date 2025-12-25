class FormHandler
{
    constructor()
    {
        this.radios         = document.getElementsByName("rating");
        this.submitButton   = document.getElementById("button_submit");
        this.form           = document.getElementById("form");
        this.formSubmitted  = document.getElementById("form-submitted-view");

        this.clearForm();
        this.submitButton.addEventListener("click", () => this.submitForm());
    }

    /**
     * Validates the form inputs
     * @returns {void}
     */
    validateForm()
    {
        let isValid = false;
        for (let radio of this.radios)
        {
            if (radio.checked)
            {
                isValid = true;
                break;
            }
        }
        return isValid;
    }

    /**
     * Clears the form inputs
     * @returns {void}
     */
    clearForm()
    {
        for (let radio of this.radios)
        {
            radio.checked = false;
        }
    }

    /**
     * Submits the form
     * @returns {void}
     */
    submitForm()
    {
        if (!this.validateForm())
        {
            this.submitButton.classList.add("error");
            setTimeout(() =>
            {
                this.submitButton.classList.remove("error");
            }, 1000);
            return;
        }
        else
        {
            let selectedValue = "";
            for (let radio of this.radios)
            {
                if (radio.checked)
                {
                    selectedValue = radio.value;
                    break;
                }
            }
            const labelSelectedValue = this.formSubmitted.querySelector("span[name='label_selected_value']");
            labelSelectedValue.textContent = selectedValue;

            this.form.classList.add("hidden");
            this.formSubmitted.classList.remove("hidden");
            this.clearForm();
        }
    }
}

document.addEventListener("DOMContentLoaded", function()
{
    const formHandler = new FormHandler();
});