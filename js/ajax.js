$(function() {

  var resDate = [];
  $.ajax({
    url:'./quizzes.json',
    success:function (res) {
      // console.log('aaa');
      resDate = res;


    }
  })
  window.res={
    resDate:resDate;
  }
})
