export const LOGO_URL = "https://st3.depositphotos.com/14353516/31848/v/380/depositphotos_318487254-stock-illustration-fast-delivery-scooter-vector-cartoon.jpg";

export const CDN_URL ="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const RES_API ="https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9059311&lng=75.78443829999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
export const MENU_API ="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.9059311&lng=75.78443829999999&restaurantId=";
export const PROXY_MENU_API = `/api/proxy?url=${encodeURIComponent(MENU_API)}`; // Proxy URL for the API
export const PROXY_RES_API = `/api/proxy?url=${encodeURIComponent(RES_API)}`;