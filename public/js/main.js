function formSubmit() {

  var studentClass = $('#class').val();
  var studentId = $('#id').val();
  var studentName = $('#name').val();

  if (studentClass === '' || studentId === '' || studentName === '') {
    $('#myModal').modal('show');
  } else {
    $("#textForm").submit();
  }
}
