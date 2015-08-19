function formSubmit(){
  
    var studentClass = $('#className').val();
    var studentId = $('#userId').val();
    var studentName = $('#userName').val();

    if(studentClass === '' || studentId === '' || studentName === ''){
        $('#myModal').modal('show');
    }else {
        $("#textForm").submit();
    }
}
