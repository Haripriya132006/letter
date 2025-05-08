const cover=document.querySelector("#cov");
    cover.addEventListener('click',open);
    let clicky=0;
    const btn=document.querySelector("#btn");
    const paper1=document.querySelector("#p1");
    const paper2=document.querySelector("#p2");

    function open(){
      if (clicky==0){
        cover.style.transform="rotateX(-185deg) rotateZ(135deg)";
        // cov.style.transition= "all 0s";
        btn.style.zIndex="105";
        clicky++;
      }
      else{
        cover.style.transform="rotateZ(135deg)";
        // cov.style.transition= "all 0s";
        btn.style.zIndex="0";
        paper1.style.zIndex="1";
        paper2.style.zIndex="0";
        clicky--;
      }

    }


    let click=0;

    paper1.addEventListener('click',flip);
    paper2.addEventListener('click',flip);

    function flip(){
      if (click==0){
        paper1.style.transition="transform 10s";
        paper1.style.transform="rotateX(180deg) ";

        paper1.style.zIndex="109";
        paper2.style.zIndex="110";

        click++;
      }
      else{
        paper1.style.transform="rotateX(0deg)";
        paper2.style.transform= "rotateX(0deg)";
        paper1.style.transition="all 0s";
        paper2.style.transition= "all 0s";
        paper1.style.zIndex="110";
        paper2.style.zIndex="109";
        click=0;
      }
    }

    btn.addEventListener('click',showpages);

    function showpages(){
      paper1.style.zIndex="110";
      paper2.style.zIndex="109";
    }