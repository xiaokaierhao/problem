$(function() {

  resDate = [];
  $.ajax({
    url:'./quizzes.json',
    success:function (res) {
      // console.log('aaa');
      resDate = res;


    }
  })
  function () {
    window.res={
      resDate:resDate;
    }
  }

})
