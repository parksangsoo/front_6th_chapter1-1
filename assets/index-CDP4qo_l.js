(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e){if(t.type!==`childList`)continue;for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();const e=`modulepreload`,t=function(e){return`/front_6th_chapter1-1/`+e},n={},r=function(r,i,a){let o=Promise.resolve();if(i&&i.length>0){let r=function(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))},s=document.getElementsByTagName(`link`),c=document.querySelector(`meta[property=csp-nonce]`),l=c?.nonce||c?.getAttribute(`nonce`);o=r(i.map(r=>{if(r=t(r,a),r in n)return;n[r]=!0;let i=r.endsWith(`.css`),o=i?`[rel="stylesheet"]`:``,c=!!a;if(c)for(let e=s.length-1;e>=0;e--){let t=s[e];if(t.href===r&&(!i||t.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${r}"]${o}`))return;let u=document.createElement(`link`);if(u.rel=i?`stylesheet`:e,i||(u.as=`script`),u.crossOrigin=``,u.href=r,l&&u.setAttribute(`nonce`,l),document.head.appendChild(u),i)return new Promise((e,t)=>{u.addEventListener(`load`,e),u.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${r}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(e=>{for(let t of e||[]){if(t.status!==`rejected`)continue;s(t.reason)}return r().catch(s)})};async function i(e={}){let{limit:t=20,search:n=``,category1:r=``,category2:i=``,sort:a=`price_asc`}=e,o=e.current??e.page??1,s=new URLSearchParams({page:o.toString(),limit:t.toString(),...n&&{search:n},...r&&{category1:r},...i&&{category2:i},sort:a}),c=await fetch(`/api/products?${s}`);return await c.json()}async function a(e){let t=await fetch(`/api/products/${e}`);return await t.json()}async function o(){let e=await fetch(`/api/categories`);return await e.json()}function s(e){var t;return`
    <div class="min-h-screen bg-gray-50">
      <header class="bg-white shadow-sm sticky top-0 z-40">
        <div class="max-w-md mx-auto px-4 py-4">
          <div class="flex items-center justify-between">
            <h1 class="text-xl font-bold text-gray-900">
              <a href="/" data-link="">쇼핑몰</a>
            </h1>
            <div class="flex items-center space-x-2">
              <!-- 장바구니 아이콘 -->
              <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
                </svg>
                ${e.cartNumber==0?``:`
                  <span
                  class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">${e.cartNumber}</span>`}
                
              </button>
            </div>
          </div>
        </div>
      </header>
      <main class="max-w-md mx-auto px-4 py-4">
        <!-- 검색 및 필터 -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
          <!-- 검색창 -->
          <div class="mb-4">
            <div class="relative">
              <input type="text" id="search-input" placeholder="상품명을 검색해보세요..." value="${e.search}" class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg
                          focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
          </div>
          <!-- 필터 옵션 -->
          <div class="space-y-3">
            <!-- 카테고리 필터 -->
            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <label class="text-sm text-gray-600">카테고리:</label>
                <button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">전체</button>
                ${e.category1?`
                    <span class="text-xs text-gray-500">&gt;</span>
                    <button data-breadcrumb="category1" data-category1="${e.category1}" class="text-xs hover:text-blue-800 hover:underline">${e.category1}</button>  
                  `:``}
                ${e.category2?`
                    <span class="text-xs text-gray-500">&gt;</span><span class="text-xs text-gray-600 cursor-default">${e.category2}</span>  
                  `:``}
                
              </div>
              <!-- 1depth 카테고리 -->
              
              <div class="flex flex-wrap gap-2">
                ${e.loading?`
                    ${e.category1?((t=e.categories.find(t=>t.category===e.category1))?.list||[]).map(t=>`
                                <button data-category1="${e.category1}" data-category2="${t.category}" class="category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors bg-white border-gray-300 text-gray-700 hover:bg-gray-50">
                                  ${t.category}
                                </button>
                              `).join(``):e.categories.map(e=>`
                                <button data-category1="${e.category}" class="category1-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors bg-white border-gray-300 text-gray-700 hover:bg-gray-50">
                                  ${e.category}
                                </button>
                              `).join(``)}
                  `:`<div class="text-sm text-gray-500 italic">카테고리 로딩 중...</div>`}
                
                
                
              </div>
              <!-- 2depth 카테고리 -->
            </div>
            <!-- 기존 필터들 -->
            <div class="flex gap-2 items-center justify-between">
              <!-- 페이지당 상품 수 -->
              <div class="flex items-center gap-2">
                <label class="text-sm text-gray-600">개수:</label>
                <select id="limit-select" class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                  <option value="10" >
                    10개
                  </option>
                  <option value="20" >
                    20개
                  </option>
                  <option value="50">
                    50개
                  </option>
                  <option value="100" >
                    100개
                  </option>
                </select>
              </div>
              <!-- 정렬 -->
              <div class="flex items-center gap-2">
                <label class="text-sm text-gray-600">정렬:</label>
                <select id="sort-select" class="text-sm border border-gray-300 rounded px-2 py-1
                             focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                  <option value="price_asc" selected="">가격 낮은순</option>
                  <option value="price_desc">가격 높은순</option>
                  <option value="name_asc">이름순</option>
                  <option value="name_desc">이름 역순</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <!-- 상품 목록 -->
        <div class="mb-6">
        ${e.loading?`
            
          <div>
            <!-- 상품 개수 정보 -->
            <div class="mb-4 text-sm text-gray-600">
              총 <span class="font-medium text-gray-900">${e.total}개</span>의 상품
            </div>
            <!-- 상품 그리드 -->
            <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
              ${e.products.map(e=>`
                  <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden product-card"
                   data-product-id="${e.productId}">
                <!-- 상품 이미지 -->
                <div class="aspect-square bg-gray-100 overflow-hidden cursor-pointer product-image" data-product-id="${e.productId}">
                  <img src="${e.image}"
                       alt="${e.title}"
                       class="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                       loading="lazy">
                </div>
                <!-- 상품 정보 -->
                <div class="p-3">
                  <div class="cursor-pointer product-info mb-3">
                    <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                      ${e.title}
                    </h3>
                    <p class="text-xs text-gray-500 mb-2">${e.brand}</p>
                    <p class="text-lg font-bold text-gray-900">
                      ${Number(e.lprice).toLocaleString(`ko-KR`)}원
                    </p>
                  </div>
                  <!-- 장바구니 버튼 -->
                  <button class="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md
                         hover:bg-blue-700 transition-colors add-to-cart-btn" data-product-id="${e.productId}">
                    장바구니 담기
                  </button>
                </div>
              </div>
                `).join(``)}
            </div>
${e.hasNext?`<div class="text-center py-4">
              <div class="inline-flex items-center">
                <svg class="animate-spin h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" 
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span class="text-sm text-gray-600">상품을 불러오는 중...</span>
              </div>
            </div>`:`<div class="text-center py-4 text-sm text-gray-500">
              모든 상품을 확인했습니다
            </div>`}
            

            
          </div>
          `:`
          <div>
            <!-- 상품 그리드 -->
            <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
              <!-- 로딩 스켈레톤 -->
              <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
                <div class="aspect-square bg-gray-200"></div>
                <div class="p-3">
                  <div class="h-4 bg-gray-200 rounded mb-2"></div>
                  <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
                  <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
                  <div class="h-8 bg-gray-200 rounded"></div>
                </div>
              </div>
              <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
                <div class="aspect-square bg-gray-200"></div>
                <div class="p-3">
                  <div class="h-4 bg-gray-200 rounded mb-2"></div>
                  <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
                  <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
                  <div class="h-8 bg-gray-200 rounded"></div>
                </div>
              </div>
              <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
                <div class="aspect-square bg-gray-200"></div>
                <div class="p-3">
                  <div class="h-4 bg-gray-200 rounded mb-2"></div>
                  <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
                  <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
                  <div class="h-8 bg-gray-200 rounded"></div>
                </div>
              </div>
              <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
                <div class="aspect-square bg-gray-200"></div>
                <div class="p-3">
                  <div class="h-4 bg-gray-200 rounded mb-2"></div>
                  <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
                  <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
                  <div class="h-8 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
            <div class="text-center py-4">
              <div class="inline-flex items-center">
                <svg class="animate-spin h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" 
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span class="text-sm text-gray-600">상품을 불러오는 중...</span>
              </div>
            </div>
          </div>
          `}
        </div>
      </main>
      <footer class="bg-white shadow-sm sticky top-0 z-40">
        <div class="max-w-md mx-auto py-8 text-center text-gray-500">
          <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
        </div>
      </footer>
    </div>
  `}function c(e,t){let n=`
    <div class="min-h-screen bg-gray-50">
      <header class="bg-white shadow-sm sticky top-0 z-40">
        <div class="max-w-md mx-auto px-4 py-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <button onclick="window.history.back()" class="p-2 text-gray-700 hover:text-gray-900 transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <h1 class="text-lg font-bold text-gray-900">상품 상세</h1>
            </div>
            <div class="flex items-center space-x-2">
              <!-- 장바구니 아이콘 -->
              <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
                </svg>
                ${t.cartNumber==0?``:`
                  <span
                  class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">${t.cartNumber}</span>`}
              </button>
            </div>
          </div>
        </div>
      </header>
      <main class="max-w-md mx-auto px-4 py-4">
      ${e.loading?`<!-- 브레드크럼 -->
        <nav class="mb-4">
          <div class="flex items-center space-x-2 text-sm text-gray-600">
            <a href="/" data-link="" class="hover:text-blue-600 transition-colors">홈</a>
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <button class="breadcrumb-link" data-category1=${e.product.category1}>
                ${e.product.category1}
            </button>
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <button class="breadcrumb-link" data-category2=${e.product.category2}>
                ${e.product.category2}
            </button>
          </div>
        </nav>
        <!-- 상품 상세 정보 -->
        <div class="bg-white rounded-lg shadow-sm mb-6">
          <!-- 상품 이미지 -->
          <div class="p-4">
            <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
              <img src=${e.product.image} alt=${e.product.title} class="w-full h-full object-cover product-detail-image">
            </div>
            <!-- 상품 정보 -->
            <div>
              <p class="text-sm text-gray-600 mb-1"></p>
              <h1 class="text-xl font-bold text-gray-900 mb-3">${e.product.title}</h1>
              <!-- 평점 및 리뷰 -->
              <div class="flex items-center mb-3">
                <div class="flex items-center">
                ${(()=>{let t=Number(e.product.rating)||0,n=Math.floor(t),r=t-n>=.5,i=5-n-(r?1:0),a=``;for(let e=0;e<n;e++)a+=`<svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>`;r&&(a+=`<svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <defs>
                          <linearGradient id="half-grad">
                            <stop offset="50%" stop-color="#facc15"/>
                            <stop offset="50%" stop-color="#d1d5db"/>
                          </linearGradient>
                        </defs>
                        <path fill="url(#half-grad)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>`);for(let e=0;e<i;e++)a+=`<svg class="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>`;return t<5&&(a+=`<span class="ml-1 text-xs text-gray-500">(${5-t}개 부족)</span>`),a})()}
                  
                </div>
                <span class="ml-2 text-sm text-gray-600">${e.product.rating}.0 (${e.product.reviewCount}개 리뷰)</span>
              </div>
              <!-- 가격 -->
              <div class="mb-4">
                <span class="text-2xl font-bold text-blue-600">${e.product.lprice}원</span>
              </div>
              <!-- 재고 -->
              <div class="text-sm text-gray-600 mb-4">
                재고 ${e.product.stock}개
              </div>
              <!-- 설명 -->
              <div class="text-sm text-gray-700 leading-relaxed mb-6">
                ${e.product.description}
              </div>
            </div>
          </div>
          <!-- 수량 선택 및 액션 -->
          <div class="border-t border-gray-200 p-4">
            <div class="flex items-center justify-between mb-4">
              <span class="text-sm font-medium text-gray-900">수량</span>
              <div class="flex items-center">
                <button id="quantity-decrease" class="w-8 h-8 flex items-center justify-center border border-gray-300
                   rounded-l-md bg-gray-50 hover:bg-gray-100">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                  </svg>
                </button>
                <input type="number" id="quantity-input" value=${e.count} min="1" max="107" class="w-16 h-8 text-center text-sm border-t border-b border-gray-300
                  focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                <button id="quantity-increase" class="w-8 h-8 flex items-center justify-center border border-gray-300
                   rounded-r-md bg-gray-50 hover:bg-gray-100">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                </button>
              </div>
            </div>
            <!-- 액션 버튼 -->
            <button id="add-to-cart-btn" data-product-id="85067212996" class="w-full bg-blue-600 text-white py-3 px-4 rounded-md
                 hover:bg-blue-700 transition-colors font-medium">
              장바구니 담기
            </button>
          </div>
        </div>
        <!-- 상품 목록으로 이동 -->
        <div class="mb-6">
          <button class="block w-full text-center bg-gray-100 text-gray-700 py-3 px-4 rounded-md
            hover:bg-gray-200 transition-colors go-to-product-list">
            상품 목록으로 돌아가기
          </button>
        </div>
        <!-- 관련 상품 -->
        <div class="bg-white rounded-lg shadow-sm">
          <div class="p-4 border-b border-gray-200">
            <h2 class="text-lg font-bold text-gray-900">관련 상품</h2>
            <p class="text-sm text-gray-600">같은 카테고리의 다른 상품들</p>
          </div>
          <div class="p-4">
            <div class="grid grid-cols-2 gap-3 responsive-grid">
              <div class="bg-gray-50 rounded-lg p-3 related-product-card cursor-pointer" data-product-id="86940857379">
                <div class="aspect-square bg-white rounded-md overflow-hidden mb-2"  data-product-id="86940857379">
                  <img src="https://shopping-phinf.pstatic.net/main_8694085/86940857379.1.jpg" alt="샷시 풍지판 창문 바람막이 베란다 문 틈막이 창틀 벌레 차단 샤시 방충망 틈새막이" class="w-full h-full object-cover" loading="lazy">
                </div>
                <h3 class="text-sm font-medium text-gray-900 mb-1 line-clamp-2">샷시 풍지판 창문 바람막이 베란다 문 틈막이 창틀 벌레 차단 샤시 방충망 틈새막이</h3>
                <p class="text-sm font-bold text-blue-600">230원</p>
              </div>
              <div class="bg-gray-50 rounded-lg p-3 related-product-card cursor-pointer" data-product-id="82094468339">
                <div class="aspect-square bg-white rounded-md overflow-hidden mb-2"  data-product-id="82094468339">
                  <img src="https://shopping-phinf.pstatic.net/main_8209446/82094468339.4.jpg" alt="실리카겔 50g 습기제거제 제품 /산업 신발 의류 방습제" class="w-full h-full object-cover" loading="lazy">
                </div>
                <h3 class="text-sm font-medium text-gray-900 mb-1 line-clamp-2">실리카겔 50g 습기제거제 제품 /산업 신발 의류 방습제</h3>
                <p class="text-sm font-bold text-blue-600">280원</p>
              </div>
            </div>
          </div>
        </div>
          `:`
        <div class="py-20 bg-gray-50 flex items-center justify-center">
          <div class="text-center">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p class="text-gray-600">상품 정보를 불러오는 중...</p>
          </div>
        </div>
        `}
        
      </main>
      <footer class="bg-white shadow-sm sticky top-0 z-40">
        <div class="max-w-md mx-auto py-8 text-center text-gray-500">
          <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
        </div>
      </footer>
    </div>
  `;return n}function l(e){let t=`
    <div class="cart-modal fixed inset-0 z-[9999] bg-black bg-opacity-50 flex items-end justify-center p-0 sm:items-center sm:p-4">
      <div class="relative bg-white rounded-t-lg sm:rounded-lg shadow-xl w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-hidden">
        <!-- 헤더 -->
        <div class="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h2 class="text-lg font-bold text-gray-900 flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
            </svg>
            장바구니
            ${e.cartList.length==0?``:`<span class="text-sm font-normal text-gray-600 ml-1">(${e.cartList.length})</span>`}
            
          </h2>
          
          <button id="cart-modal-close-btn" class="text-gray-400 hover:text-gray-600 p-1">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <!-- 컨텐츠 -->
        <div class="flex flex-col max-h-[calc(90vh-120px)]">
          ${e.cartList.length==0?`
            <!-- 빈 장바구니 -->
          <div class="flex-1 flex items-center justify-center p-8">
            <div class="text-center">
              <div class="text-gray-400 mb-4">
                <svg class="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
                </svg>
              </div>
              <h3 class="text-lg font-medium text-gray-900 mb-2">장바구니가 비어있습니다</h3>
              <p class="text-gray-600">원하는 상품을 담아보세요!</p>
            </div>
          </div>  
          `:`
      <!-- 전체 선택 섹션 -->
          <div class="p-4 border-b border-gray-200 bg-gray-50">
            <label class="flex items-center text-sm text-gray-700">
              <input type="checkbox" id="cart-modal-select-all-checkbox" ${e.selectCartItem.length===e.cartList.length?`checked`:``} class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-2">
              전체선택 (${e.cartList.length}개)
            </label>
          </div>
          <!-- 아이템 목록 -->
          <div class="flex-1 overflow-y-auto">
            <div class="p-4 space-y-4">
              ${e.cartList.map(t=>`
                <div class="flex items-center py-3 border-b border-gray-100 cart-item" data-product-id="86940857379">
                <!-- 선택 체크박스 -->
                <label class="flex items-center mr-3">
                  <input type="checkbox" class="cart-item-checkbox w-4 h-4 text-blue-600 border-gray-300 rounded
                focus:ring-blue-500" data-product-id=${t.productId} ${e.selectCartItem.includes(String(t.productId))?`checked`:``}>
                </label>
                <!-- 상품 이미지 -->
                <div class="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden mr-3 flex-shrink-0">
                  <img src=${t.image} alt=${t.title} class="w-full h-full object-cover cursor-pointer cart-item-image" data-product-id="86940857379">
                </div>
                <!-- 상품 정보 -->
                <div class="flex-1 min-w-0">
                  <h4 class="text-sm font-medium text-gray-900 truncate cursor-pointer cart-item-title" data-product-id="86940857379">
                    ${t.title}
                  </h4>
                  <p class="text-sm text-gray-600 mt-1">
                    ${t.lprice}원
                  </p>
                  <!-- 수량 조절 -->
                  <div class="flex items-center mt-2">
                    <button class="quantity-decrease-btn w-7 h-7 flex items-center justify-center
                 border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100" data-product-id=${t.productId}>
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                      </svg>
                    </button>
                    <input type="number" value="1" min="1" class="quantity-input w-12 h-7 text-center text-sm border-t border-b
                border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500" disabled="" data-product-id=${t.productId}>
                    <button class="quantity-increase-btn w-7 h-7 flex items-center justify-center
                 border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100" data-product-id=${t.productId}>
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <!-- 가격 및 삭제 -->
                <div class="text-right ml-3">
                  <p class="text-sm font-medium text-gray-900">
                    ${t.lprice}원
                  </p>
                  <button class="cart-item-remove-btn mt-1 text-xs text-red-600 hover:text-red-800" data-product-id=${t.productId}>
                    삭제
                  </button>
                </div>
              </div>
              `).join(``)}
              
            </div>
          </div>        
    `}
          
        </div>
        ${e.cartList.length==0?``:`  
        <!-- 하단 액션 -->
        <div class="sticky bottom-0 bg-white border-t border-gray-200 p-4">
          <!-- 선택된 아이템 정보 -->
          <!-- 총 금액 -->
          <div class="flex justify-between items-center mb-4">
            <span class="text-lg font-bold text-gray-900">총 금액</span>
            <span class="text-xl font-bold text-blue-600">0원</span>
          </div>
          <!-- 액션 버튼들 -->
          <div class="space-y-2">
          ${e.selectCartItem.length==0?``:`
            <button id="cart-modal-remove-selected-btn" class="w-full bg-red-600 text-white py-2 px-4 rounded-md
                       hover:bg-red-700 transition-colors text-sm">
              선택한 상품 삭제 (${e.selectCartItem.length}개)
            </button>`}
            
            <div class="flex gap-2">
              <button id="cart-modal-clear-cart-btn" class="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md
                       hover:bg-gray-700 transition-colors text-sm">
                전체 비우기
              </button>
              <button id="cart-modal-checkout-btn" class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md
                       hover:bg-blue-700 transition-colors text-sm">
                구매하기
              </button>
            </div>
          </div>
        </div>`}

      </div>
    </div>
  `;return t}function u(){let e=`
    <main class="max-w-md mx-auto px-4 py-4">
      <div class="text-center my-4 py-20 shadow-md p-6 bg-white rounded-lg">
      <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#4285f4;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#1a73e8;stop-opacity:1" />
          </linearGradient>
          <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="2" stdDeviation="8" flood-color="#000000" flood-opacity="0.1"/>
          </filter>
        </defs>

        <!-- 404 Numbers -->
        <text x="160" y="85" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="48" font-weight="600" fill="url(#blueGradient)" text-anchor="middle">404</text>

        <!-- Icon decoration -->
        <circle cx="80" cy="60" r="3" fill="#e8f0fe" opacity="0.8"/>
        <circle cx="240" cy="60" r="3" fill="#e8f0fe" opacity="0.8"/>
        <circle cx="90" cy="45" r="2" fill="#4285f4" opacity="0.5"/>
        <circle cx="230" cy="45" r="2" fill="#4285f4" opacity="0.5"/>

        <!-- Message -->
        <text x="160" y="110" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="14" font-weight="400" fill="#5f6368" text-anchor="middle">페이지를 찾을 수 없습니다</text>

        <!-- Subtle bottom accent -->
        <rect x="130" y="130" width="60" height="2" rx="1" fill="url(#blueGradient)" opacity="0.3"/>
      </svg>

      <a href="/" data-link class="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">홈으로</a>
    </div>
    </main>
  `;return e}function d(){let e=`
    <div class="cart-toast fixed inset-0 z-[9999] flex flex-col gap-2 items-center justify-center mx-auto" style="width: fit-content;">
      <div class="bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm">
        <div class="flex-shrink-0">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <p class="text-sm font-medium">장바구니에 추가되었습니다</p>
        <button id="toast-close-btn" class="flex-shrink-0 ml-2 text-white hover:text-gray-200">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

    
    </div>
  `;return e}const f=()=>r(async()=>{let{worker:e}=await import(`./browser-CcyfQrG1.js`);return{worker:e}},[]).then(({worker:e})=>e.start({onUnhandledRequest:`bypass`,serviceWorker:{url:`/front_6th_chapter1-1/mockServiceWorker.js`}}));window.addEventListener(`popstate`,()=>{console.log(`앞뒤`),L()}),window.onscroll=async function(){if(!window.location.pathname.includes(`/product`)&&window.innerHeight+window.scrollY>=document.body.offsetHeight&&p.hasNext){let e={page:p.page+1,limit:p.limit,search:p.search,category1:``,category2:``,sort:p.sort},t=await i(e);p.products=[...p.products,...t.products],p.page=t.pagination.page,p.hasNext=t.pagination.hasNext,I()}};let p={page:1,product:[],total:0,loading:!1,limit:0,sort:`price_asc`,search:``,hasNext:!0,categories:[],category1:null,category2:null,cartNumber:0},m={selectCartItem:[],cartList:[]},h={product:null,loading:!1,count:1};function g(e,t){let n=new URL(window.location),r=n.searchParams;r.set(e,t),n.search=r.toString(),window.history.pushState({},``,n)}function _(){h.count+=1,F()}function v(){--h.count,F()}function y(){m.selectCartItem=[],m.cartList=[];let e=document.querySelector(`.cart-modal`);e&&e.remove(),P()}function b(e){console.log(`전체 체크`),e?m.selectCartItem=m.cartList.map(e=>String(e.productId)):m.selectCartItem=[];let t=document.querySelector(`.cart-modal`);t&&t.remove(),P()}function x(){m.cartList=m.cartList.filter(e=>!m.selectCartItem.includes(String(e.productId))),m.selectCartItem=[];let e=document.querySelector(`.cart-modal`);e.remove(),P()}function S(e){m.selectCartItem.includes(String(e))?m.selectCartItem=m.selectCartItem.filter(t=>t!==String(e)):m.selectCartItem=[...m.selectCartItem,e];let t=document.querySelector(`.cart-modal`);t.remove(),P()}function C(e){m.cartList=m.cartList.filter(t=>String(t.productId)!==String(e)),console.log(`?dsaf`,m.cartList),p.cartNumber=m.cartList.length,I();let t=document.querySelector(`.cart-modal`);t.remove(),P()}function w(e){console.log(`수량 증가`,e),m.cartList=m.cartList.map(t=>String(t.productId)===String(e)?{...t,quantity:t.quantity+1}:t);let t=document.querySelector(`.quantity-input[data-product-id="${e}"]`),n=m.cartList.find(t=>String(t.productId)===String(e));t&&n&&(t.value=n.quantity);let r=document.querySelector(`.text-xl.font-bold.text-blue-600`);if(r){let e=m.cartList.reduce((e,t)=>e+Number(t.lprice.replace(/[^0-9]/g,``))*t.quantity,0).toLocaleString(`ko-KR`);r.textContent=`${e}원`}}function T(e){console.log(`수량 감소`,e),m.cartList=m.cartList.map(t=>String(t.productId)===String(e)?{...t,quantity:t.quantity>1?t.quantity-1:1}:t);let t=document.querySelector(`.quantity-input[data-product-id="${e}"]`),n=m.cartList.find(t=>String(t.productId)===String(e));t&&n&&(t.value=n.quantity);let r=document.querySelector(`.text-xl.font-bold.text-blue-600`);if(r){let e=m.cartList.reduce((e,t)=>e+Number(t.lprice.replace(/[^0-9]/g,``))*t.quantity,0).toLocaleString(`ko-KR`);r.textContent=`${e}원`}}function E(e){let t=p.products.find(t=>String(t.productId)===String(e)||String(t.id)===String(e));if(m.cartList.some(e=>String(e.productId)===String(t.productId)))m.cartList=m.cartList.map(e=>String(e.productId)===String(t.productId)?{...e,quantity:e.quantity+1}:e);else{p.cartNumber=m.cartList.length+1;let e={productId:t.productId,image:t.image,title:t.title,lprice:t.lprice,quantity:1};m.cartList=[...m.cartList,e]}I()}async function D(){let e={page:1,limit:p.limit,search:``,category1:``,category2:``,sort:p.sort},t=await i(e);p.products=t.products,p.total=t.pagination.total,p.limit=t.pagination.limit,p.category1=null,p.category2=null,I()}async function O(e){console.log(`선택 카테고리2`,e);let t={page:1,limit:p.limit,search:``,category1:p.category1,category2:e,sort:p.sort},n=await i(t);p.products=n.products,p.total=n.pagination.total,p.limit=n.pagination.limit,p.category2=e,I()}async function k(e){console.log(`선택 카테고리1`,e);let t={page:1,limit:p.limit,search:``,category1:e,category2:``,sort:p.sort},n=await i(t);p.products=n.products,p.total=n.pagination.total,p.limit=n.pagination.limit,p.category1=e,I()}async function A(e){console.log(`검색 값`,e);let t={page:1,limit:p.limit,search:e,category1:``,category2:``,sort:p.sort},n=await i(t);console.log(n),p.products=n.products,p.total=n.pagination.total,p.limit=n.pagination.limit,p.hasNext=n.pagination.hasNext,p.search=e,g(`search`,e),I()}async function j(e){let t={page:1,limit:e,search:``,category1:``,category2:``,sort:`price_asc`},n=await i(t);p.products=n.products,p.total=n.pagination.total,p.loading=!0,p.limit=n.pagination.limit,console.log(n),g(`limit`,e),I()}async function M(e){console.log(`정렬`,e);let t={page:1,limit:p.limit,search:``,category1:``,category2:``,sort:e},n=await i(t);console.log(n),p.products=n.products,p.total=n.pagination.total,p.limit=n.pagination.limit,p.loading=!0,p.sort=n.filters.sort,g(`sort`,e),I()}function N(){document.body.querySelector(`#root`).innerHTML=u()}function P(){document.body.insertAdjacentHTML(`beforeend`,l(m));let e=document.querySelector(`.text-xl.font-bold.text-blue-600`);if(e){let t=m.cartList.reduce((e,t)=>e+Number(t.lprice.replace(/[^0-9]/g,``))*t.quantity,0).toLocaleString(`ko-KR`);e.textContent=`${t}원`}document.getElementById(`cart-modal-close-btn`).addEventListener(`click`,()=>{document.querySelector(`.cart-modal`).remove()}),document.querySelectorAll(`.quantity-increase-btn`).forEach(e=>{e.addEventListener(`click`,()=>{if(e){let t=e.getAttribute(`data-product-id`);w(t)}})}),document.querySelectorAll(`.quantity-decrease-btn`).forEach(e=>{e.addEventListener(`click`,()=>{if(e){let t=e.getAttribute(`data-product-id`);T(t)}})}),document.querySelectorAll(`.cart-item-remove-btn`).forEach(e=>{e.addEventListener(`click`,()=>{if(e){let t=e.getAttribute(`data-product-id`);C(t)}})}),document.getElementById(`cart-modal-select-all-checkbox`).addEventListener(`change`,e=>{b(e.target.checked)}),document.querySelectorAll(`.cart-item-checkbox`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-product-id`);S(t)})}),document.getElementById(`cart-modal-remove-selected-btn`).addEventListener(`click`,()=>{x()}),document.getElementById(`cart-modal-clear-cart-btn`).addEventListener(`click`,()=>{y()})}async function F(){document.body.querySelector(`#root`).innerHTML=c(h,p),document.querySelector(`#quantity-increase`).addEventListener(`click`,()=>{_()}),document.querySelector(`#quantity-decrease`).addEventListener(`click`,()=>{v()}),document.querySelectorAll(`.aspect-square`).forEach(e=>{e.addEventListener(`click`,async()=>{let t=e.getAttribute(`data-product-id`);console.log(`상세페이지 이동`,t),window.history.pushState({},``,`/product/${t}`),L()})})}async function I(){document.body.querySelector(`#root`).innerHTML=s(p);let e=document.getElementById(`limit-select`);Array.from(e.options).forEach(e=>{e.selected=Number(e.value)===Number(p.limit)}),e.addEventListener(`change`,e=>{j(e.target.value)});let t=document.getElementById(`sort-select`);Array.from(t.options).forEach(e=>{e.selected=e.value===p.sort}),t.addEventListener(`change`,e=>{M(e.target.value)});let n=document.getElementById(`search-input`);n&&n.addEventListener(`keydown`,async e=>{e.key===`Enter`&&A(e.target.value)}),document.querySelectorAll(`.category1-filter-btn`).forEach(e=>{e.addEventListener(`click`,async()=>{k(e.getAttribute(`data-category1`))})}),document.querySelectorAll(`.category2-filter-btn`).forEach(e=>{e.addEventListener(`click`,async()=>{O(e.getAttribute(`data-category2`))})}),document.querySelectorAll(`[data-breadcrumb="reset"]`).forEach(e=>{e.addEventListener(`click`,async()=>{D()})}),document.querySelectorAll(`.add-to-cart-btn`).forEach(e=>{e.addEventListener(`click`,()=>{if(e){let t=e.getAttribute(`data-product-id`);E(t),document.body.insertAdjacentHTML(`beforeend`,d()),setTimeout(()=>{let e=document.querySelector(`.cart-toast`);e&&e.remove()},1e3)}})}),document.getElementById(`cart-icon-btn`).addEventListener(`click`,()=>{P()}),document.body.addEventListener(`click`,function(e){let t=document.querySelector(`.cart-modal`);t&&e.target===t&&t.remove()}),document.addEventListener(`keydown`,function(e){if(e.key===`Escape`){let e=document.querySelector(`.cart-modal`);e&&e.remove()}}),document.querySelectorAll(`.aspect-square`).forEach(e=>{e.addEventListener(`click`,async()=>{console.log(`상세페이지 이동`);let t=e.getAttribute(`data-product-id`);window.history.pushState({},``,`/product/${t}`),L()})})}async function L(){if(window.location.pathname==`/`){I();let e={page:1,limit:new URL(window.location).searchParams.get(`limit`)||p.limit,search:new URL(window.location).searchParams.get(`search`)||p.search,category1:p.category1,category2:p.category2,sort:new URL(window.location).searchParams.get(`sort`)||p.sort},t=await i(e),n=await o();p.products=t.products,p.total=t.pagination.total,p.loading=!0,p.limit=new URL(window.location).searchParams.get(`limit`)||p.limit,p.hasNext=t.pagination.hasNext,p.search=new URL(window.location).searchParams.get(`search`)||p.search,p.sort=new URL(window.location).searchParams.get(`sort`)||p.sort,p.categories=Object.entries(n).map(([e,t])=>({category:e,list:Object.keys(t).map(e=>({category:e}))})),I()}else if(window.location.pathname.includes(`/product`)){F();let e=window.location.pathname.split(`/`),t=e[e.indexOf(`product`)+1],n=await a(t);console.log(`상품 상세 정보`,n),h.product=n,h.loading=!0,F()}else N()}f().then(L);