$(function() {
  window.res={
    resDate:resDate;
  }
  var resDate = [];
  $.ajax({
    url:'./quizzes.json',
    success:function (res) {
      // console.log('aaa');
      resDate = res;


    }
  })
})
