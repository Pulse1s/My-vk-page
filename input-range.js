function bar() {
    const inputs = document.querySelectorAll('.input-range')
    inputs.forEach((input) => {
        const value = ((input.value) / input.attributes.max.value).toFixed(2) * 100
        input.style.background = `-webkit-linear-gradient(left, #5181b8 0%, #5181b8 ${value}%, #e5ebf1 ${value}%, #e5ebf1 100%)`
    })
}

bar()


