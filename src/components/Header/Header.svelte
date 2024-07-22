<script lang='ts'>
  export let colorNamesTag: string[]

  let listColor: HTMLElement
  const navEventElements = {
  	listColor: null,
  	showButtonTag: false,
  	baseColorsCopied: colorNamesTag,
  	listColorTagsExist: false,
  	filterColorTags: false,
  	selectedColor: '',
  	inputSearch: null,
  }
  let { showButtonTag, listColorTagsExist, selectedColor } = navEventElements

  // let inputDetail:{placeholderText:string,padding:number}=defalultInputDetail;
  function handleBodyClick(event: MouseEvent) {
  	const target = event.target as HTMLElement
  	if (!target.closest('nav')) {
  		if (listColor) {
  			listColor.style.display = 'none'
  		}
  		listColorTagsExist = false
  	}
    else {
  		listColor.style.display = 'block'
  		listColorTagsExist = true
  	}
  }

  import ThLogo from './Th_Logo.svelte'
  import ChromeButton from './BaseButton/Chrome_Btn.svelte'
  import SearchInput from './BaseButton/Search_Input.svelte'
  import ColorTag from './Color_Tag.svelte'
  import ColorTagActive from './Color_Tag_Active.svelte'
  import ColorSuggestionPanel from './Color_suggestion_Panel.svelte'
  import TagColorBtn from './BaseButton/Tag_Color_Btn.svelte'
</script>

<svelte:body lang='ts' on:click={handleBodyClick} />

<header
  class='flex items-center top-0 justify-between w-full bg-white fixed left-1/2 -translate-x-1/2 z-[100] py-[.8rem]'
>
  <ThLogo />

  <nav class='w-full nav'>
    <div class='parent px-[2.5rem] w-full relative'>
      <div class='h-full relative rounded-[2rem]'>
        <ColorTagActive {selectedColor} {showButtonTag} />
        <SearchInput
          on:filterSearchText={() => {
          // filterSearchText(e);
          }}
          on:handleColor={() => {
          // checkValue(e.detail.e);
          }}
          {listColor}
          {selectedColor}
        />

        <ColorTag {listColorTagsExist}>
          <ColorSuggestionPanel bind:listColor>
            {#each colorNamesTag as tagName}
              <TagColorBtn {tagName} />
            {/each}
          </ColorSuggestionPanel>
        </ColorTag>
      </div>
    </div>
  </nav>
  <ChromeButton />
</header>
