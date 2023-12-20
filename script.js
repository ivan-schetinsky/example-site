var modal = document.getElementById('modalbg')
var span = document.getElementsByClassName('close')[0]

const openModal = text => {
	modal.style.display = 'flex'

	var body = document.getElementById('modalBody')
	if (body) {
		body.innerHTML = `
			<p>${text}<p>
		`
	}
}

const closeModal = () => {
	modal.style.display = 'none'
}

span.onclick = function() {
	closeModal()
}

window.onclick = function(event) {
	if (event.target == modal) {
		closeModal()
	}
}

const reportSend = () => {
	openModal('Ваш запрос успешно отправлен!')
}