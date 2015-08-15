function formSubmit(){
    var studentClass = $('.className').val();
    var studentId = $('.userId').val();
    var studentName = $('.userName').val();

    if(studentClass === '' || studentId === '' || studentName === ''){
        $('#myModal').modal('show');
        $('#className').addClass('has-error');
    }else {
        $("#textForm").submit();
    }
}
