$(function() {



  $.ajax({
    url:'./quizzes.json',
    success:function (res) {
      var resDate = [];
      resDate = res;
      var ran = parseInt(Math.random()*res.length);
      var promblem = new Array();
      var score = 0;
      var isCommit = false;
      for(var i = 0;i<10;i++){
        promblem[i]=res[ran+i];
        // console.log(promblem[i]);
      }


      $('.stGame').on('click',function(){
        $('.start').fadeOut(500);

        setTitle(0);
        setAnswer(0);
        tanswer(0);
      })















      function setTitle(a) {
        $('.title').html(`<h2>${promblem[a].quiz}</h2>`);
        }

      function setAnswer(a) {
        for(var i = 0;i<promblem[a].options.length;i++){
          $('.answer').append(`<p class='item' name = '${i+1}'>${i+1}、${promblem[a].options[i]}</p>`);
        }
      }
      function tanswer(a) {
        $('.answer').on('click',function (e) {
          // if(!isCommit){
          //   isCommit = true;
          //   $('.answer').fadeOut(function () {
          //     console.log('asdf');
          //     isCommit=false;
          // },1000)
          // }

          var item = e.target;
          var no = $(item).attr('name');
          if(no == promblem[a].answer){
            // score++;
            // console.log(no);
            // $(item).css('background','skyblue');
          }else{
            // console.log(no);
          }
          if(a<9){
          setTitle(a+1);
          $('.answer').html('');
          setAnswer(a+1);
          tanswer(a+1);
          // console.log('asdf');
        }else{
          $('.gaming').fadeOut(500);

        }

        })
      }




     $('.reGame').on('click',function () {
       window.location.reload();
     })










    }
  })


  // function () {
  //   window.res={
  //     resDate:resDate
  //   }
  // }

})
