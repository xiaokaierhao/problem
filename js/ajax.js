$(function() {

  var resDate = [];
  $.ajax({
    url:'./quizzes.json',
    success:function (res) {
      // console.log('aaa');
      resDate = res;


    }
  })
  res={
    resDate:resDate,
    asdf:'asdf'
  }
  // function () {
  //   window.res={
  //     resDate:resDate
  //   }
  // }

})
