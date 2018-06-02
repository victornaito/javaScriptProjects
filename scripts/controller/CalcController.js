class CalcController {
	
	constructor(){

		this._locale = "pt-BR"
		this._displayCalcEl = document.querySelector("#display")
		this._dateEl = document.querySelector("#data")
		this._timeEl = document.querySelector("#hora")
		this._currentDate

		this.initialize()
		this.initButtonsEvents()
	}

	initialize(){

		this.setDisplayDateTime()

		setInterval(() => {
			this.setDisplayDateTime()
		}, 1000)
	}


	addEventListenerAll(element, events, fn){

		events.split(' ').forEach(event => {
			element.addEventListener(event, fn, false)
		})
	}

	initButtonsEvents(){
		let buttons = document.querySelectorAll("#buttons > g, #parts > g") // Pega TODOS os filhos da classe buttons que sejam g

		buttons.forEach((btn,index) => {
			
			this.addEventListenerAll(btn, 'click drag mouseover', (e) => {
				console.log(btn.className.baseVal.replace("btn-", ""))
			})

			this.addEventListenerAll(btn, 'click drag mouseover', (e) => {
				btn.style.cursor = "pointer"
			})
		})
		
	}

	setDisplayDateTime(){
		this._dateEl.innerHTML = this.currentDate.toLocaleDateString(this._locale, {
			day: "2-digit",
			month: "long",
			year: "numeric"
		})
		this._timeEl.innerHTML = this.currentDate.toLocaleTimeString(this._locale)
	}

	set displayTime(valor){
		this._timeEl.innerHTML = valor
	}

	get displayTime(){
		return this._displayCalcEl.innerHTML
	}

	get displayDate(){
		return this._dateEl.innerHTML
	}

	set displayDate(valor){
		this._dateEl.innerHTML = valor
	}

	get displayCalc(){
		return this._displayCalcEl.innerHTML
	}

	set displayCalc(valor){
		this._displayCalcEl.innerHTML = valor
	}

	get currentDate(){
		return new Date()
	}

	set currentDate(valor){
		this._dateEl.innerHTML = valor
	}

}