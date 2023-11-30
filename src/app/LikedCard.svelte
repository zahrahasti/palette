
<script>
    import { formatTimeDifference } from "$lib/utils";
    export let color= {
      "name": "blue",
      "id": "111",
      "color_1": "1D5D9B",
      "color_2": "75C2F6",
      "color_3": "7895CB",
      "color_4": "FBEEAC",
      "timer": "2022/3/4",
      "likes": "333",
      "popular": true
  }
</script>
<div class="relative w-full scale-[.85] sm:scale-100">
    <div style="background:#${color.color_1}" class="pallete--color  grid grid-rows-16 w-full  text-[1.6rem] md:text-[1.4rem] xl:text-[1.5rem] text-white  bg-[#${color.color_1}] aspect-square top-0 rounded-[1rem] overflow-hidden  pallete--color__1" data-id="${color.id}">
        <div style="background:#${color.color_1};" class="container-color group row-[span_5_/_span_16]  flex rounded-tr-[1rem]  rounded-tl-[1rem] cursor-pointer">
            <button type="button" class="btn btn--copy__color w-max group-hover:opacity-100  self-end opacity-0 hover:bg-[rgba(0,0,0,.2)] duration-150 rounded-t-md  px-[1rem] bg-[rgba(0,0,0,.15)]" data-color="#${color.color_1}">#${color.color_1}</button>
        </div>
        <div style="background:#${color.color_2};" class="container-color group row-[span_4_/_span_16] flex animate-[translateUp_1.5s_ease_forwards] cursor-pointer">
            <button type="button" class="btn btn--copy__color  w-max group-hover:opacity-100 opacity-0  self-end hover:bg-[rgba(0,0,0,.2)] duration-150 rounded-t-md   px-[1rem] bg-[rgba(0,0,0,.15)]" data-color="#${color.color_2}">#${color.color_2}</button>
        </div>
        <div style="background:#${color.color_3};" class="container-color group row-[span_3_/_span_16] animate-[translateUp_1.5s_ease_forwards] flex cursor-pointer">
            <button type="button" class="btn btn--copy__color w-max group-hover:opacity-100 opacity-0 hover:bg-[rgba(0,0,0,.2)] duration-150 self-end rounded-t-md  px-[1rem] bg-[rgba(0,0,0,.15)]" data-color="#${color.color_3}">#${color.color_3}</button>
        </div>
        <div style="background:#${color.color_4};" class="container-color group row-[span_2_/_span_16] animate-[translateUp_1.5s_ease_forwards] flex cursor-pointer">
            <button type="button" class="btn btn--copy__color w-max group-hover:opacity-100 opacity-0 hover:bg-[rgba(0,0,0,.2)] duration-150 self-end rounded-t-md  px-[1rem] bg-[rgba(0,0,0,.15)]" data-color="#${color.color_4}">#${color.color_4}</button>
        </div>
    </div>
    <div class="flex container--btn__pallete container--main__btn justify-between  mt-9 w-full gap-3 items-center my-[1rem]">
        <button type="button" class="btn active btn-like text-[1.8rem]  md:text-[1.6rem] sm:text-[1.4rem] btn-like__${color.id} btn-custom" data-id="${color.id}" data-liked="false">
          <span><svg class="stroke-[1rem]  stroke-black text-transparent w-[2rem] h-[2rem]"><use href="./img/icon.svg#heart3"></use></svg></span>
          <span id="like-count" class="like-counter">Liked</span>
        </button>
        <time class="text-[1.4rem] md:text-[1.2rem] text-gray-500">${formatTimeDifference(new Date(color.timer),new Date())}</time>
       </div>
</div>