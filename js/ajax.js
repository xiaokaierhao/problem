$(function() {

  var resDate = [];
  $.ajax({
    url:'./quizzes.json',
    success:function (res) {
      // console.log('aaa');
      resDate = res;

      console.log(resDate);
      res={
        resDate:resDate,
        asdf:'asdf'
      }
    }
  })
  console.log(resDate);

  // function () {
  //   window.res={
  //     resDate:resDate
  //   }
  // }

})
