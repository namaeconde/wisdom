import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

export const CebuCityMap = styled((props) => {

  // TODO: This will be fetch from google cloud big query
  return (
    <svg width="333" height="427" viewBox="0 0 333 427" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M216 400L218.5 399L219.5 397.5L218 395L219.5 393L220.5 389L223.5 391.5L227 389L229 385L231.5 382.5V380.5L233 379H236.5L239.5 376.5L241.5 373H247.5L252.5 370H258H263H271H277L283.5 367H291H296L294 362.5L296 361V356.5H300V353L323 332L315 321.5L313 314.5H317L313 310L317 307.5L315 305V296L318.5 290L315 284.5H310.5L305 278.5H300L310.5 251.5L323 213.5V189.5L327 164L331 109V72L318.5 56V49L300 19.5L267 11.5L258 1L28 177L39.5 186L52 206.5V217L55.5 241L66.5 266.5L60.5 272V300L76.5 296L99.5 286L103 290L107.5 291.5L106.5 290H111.5L114.5 286V290V294H117V300L119.5 298H125L128 296L131.5 303L137 306.5L135.5 310L138.5 317.5H133.5L128 332L148 361L150.5 362.5L157 380.5L176.5 397.5L183.5 402.5L185.5 408L190 414.5H195.5L209 425.5L214 423L220.5 420L223.5 418V414.5V411V406.5L220.5 404.5L218 402.5M216 400L213.5 401L214 402.5L216 400Z" stroke="#226236"/>
      <path d="M288 16L276.5 28.5M276.5 28.5L236.5 57.5M276.5 28.5L290.5 49L292.5 59.5V68.5L303 71.5M236.5 57.5L216 71.5L195 94.5M236.5 57.5L232.5 43L218.5 33.5M236.5 57.5L247 65L260 71.5H267M195 94.5L183 108.5M195 94.5L198.5 105.5L218.5 127M183 108.5L162.5 76.5M183 108.5L180.56 140.706M180.5 141.5L167 169.5M180.5 141.5L182.164 141.806M180.5 141.5L180.56 140.706M167 169.5L156.5 196.5M167 169.5L150 154L102 124.5M156.5 196.5L114 242M156.5 196.5L170.5 208M114 242L105.5 266M114 242L56 157M114 242L137 246.5L162.5 258M105.5 266L102 285.5M105.5 266L93.5 242H56M102 285.5H124L146 269.5L163.599 259.863M102 285.5L105.5 295L108 292L106.5 289.5L108 288.5H109.5L111 290.5H112.5L113 288L114 287L116 288L115.5 290L112.5 293L113 293.5L115.5 294L117.5 295L116 297.5V300.5L117.5 300L118.5 298L121.5 297.5L123 298L124.5 299.5L125.5 299L126 297.5L128 297L130 298V301.5L133 303.5L135 304L136.5 306.5V312.5L138 314L137.5 315.5L147 315L157 302.5L167 305.5M163.599 259.863L167 258M163.599 259.863L162.5 258M163.599 259.863L174 277.5H180.5M167 258L218.5 231.296M167 258H162.5M221 230L227.5 223M221 230L218.5 231.296M221 230L216 246.5L221 254.5L224.5 262V269.5L232.5 274.5V292M227.5 223L236.5 205.5M227.5 223L205 208L198.5 192.5M227.5 223L263.5 265.75M236.5 205.5L235 198.5L247 196.5L251 193.4M236.5 205.5L255 219L267 236L272 246.5L274.022 256.457M288 141.5L279.5 157L277.938 160M288 141.5L314.5 160M288 141.5L303 124.5M314.5 160L307.5 186.5L282 201.5L290.5 242M314.5 160H328M290.5 242L276.5 254.5L274.022 256.457M290.5 242L299.5 214L303 216L311 201.5L321.5 212L311 250M290.5 242L295 246.5L311 250M232.5 292L201.5 317L205 292L180.5 277.5M232.5 292L242 284.227M180.5 277.5L167 305.5M167 305.5L170.5 323.5L195 349.5M195 349.5L189.25 356.277M195 349.5L213.5 370.5M195 349.5L203.5 343.125M231.51 340.495L231.5 340.5L230.943 339.864M231.51 340.495L238 337.5H242L248 336L249 335.714M231.51 340.495L236 345.5L238 351.5M231.51 340.495L230.943 339.864M257.5 336L255 334L249 335.714M257.5 336L260 334L259.5 327.5L257.5 320L260 315V311.5M257.5 336L257 339H255V340.5H256.5V343.125L256.146 346.22M257.5 336L260 335.714L267 334M260 311.5H262.5M260 311.5L259.5 305.5L251 296.5L242 287.5V284.227M262.5 311.5V311M262.5 311.5V314.5L264 315L263.5 317V320L268.5 331.5M262.5 311.5H269L272 309.5L276.5 311.5H279.5L282 315L284 317M284 317L286.5 311.5M284 317L281 322.5L285 331.5M286.5 311.5L290.5 305.5L291.786 303.5M286.5 311.5L294 317L295 318.5M295 298.5L299.5 277.5M295 298.5L289 294L276.5 283L280.5 277.5L267 262M295 298.5L291.786 303.5M299.5 277.5H301.5L305 262L309 253L311 250M299.5 277.5L298 276.5L293.5 272.5H287.5L289 270.5L287.5 269.5H284L274.022 256.457M218.5 127L232.5 117L242 134L277.938 160M218.5 127L205 146L182.164 141.806M277.938 160L267 181L251 193.4M276.416 108.173L276.5 108.5L274.022 106.702M276.416 108.173L267 71.5M276.416 108.173L274.022 106.702M276.416 108.173L303 124.5M267 71.5L297.573 84.6699M303 71.5L299.5 85.5L297.573 84.6699M303 71.5L317 46.5M182.164 141.806L180.56 140.706M182.164 141.806L216 165M216 165L198.5 181V192.5M216 165L236.5 189L251 193.4M198.5 192.5L170.5 208M170.5 208L218.5 231.296M267 262L263.5 265.75M267 262L274.022 256.457M263.5 265.75L260 269.5L242 284.227M297.573 84.6699L317 105.5M317 105.5L332.5 108.5M317 105.5V108.5L303 124.5M251 90L274.022 106.702M307.5 192.5L321.5 189M186 408.5L198.5 397M198.5 397L203.5 393M198.5 397L172 369.25M203.5 393V385M203.5 393L213.5 402V399.5H218.5L220.5 398L218.5 396M203.5 385L183.5 363.054M203.5 385L218.5 396M183.5 363.054L181 366L177 365L172 369.25M183.5 363.054L189.25 356.277M157 382L172 369.25M189.25 356.277L207 378M207 378L220.5 389.5V393H218.5V396M207 378L210.5 375L209.5 373.5L213.5 370.5M213.5 370.5L216 368M216 368L217.5 376L227 387M216 368L215.5 363.5L220.5 363.054L223 365L232.5 363.5M203.5 343.125L205 342L212.5 329L224.5 332.5L230.943 339.864M203.5 343.125L207 345.5V348.5L211.5 347.5H213.5V352.5L217.5 354L222.5 355.5L227 352.5L228 354H230V352.5L232.5 354L233.5 352.5L238 351.5M238 351.5L241 356.277L242 359V360.5M242 360.5H243V362M242 360.5L239 363.054L232.5 363.5M243 362L252.5 356.277L252 354M243 362V365L245.5 367L249 368L251 369.25M252 354L250.5 344.5L249 335.714M252 354L260 354.5M260 354.5L256 350.5L255 348.5L256 347.5L256.146 346.22M260 354.5L264 357.5M260 354.5L262.5 354L267 352.5L271 351.7M232.5 363.5L233.5 374.5L236 376V378M253 356.5L255 359V363.054M255 363.054L256.5 367V369.25M255 363.054L259.5 362L260 363.5H263.5M263.5 363.5L264 359.5V357.5M263.5 363.5V369.25H262V371.5M263.5 363.5H267M264 357.5L269 360.5V363.054M268.5 331.5L267 334M268.5 331.5H271M267 334L270 343.125V344.5M270 344.5L266 343.125L259.5 345.5L256.146 346.22M270 344.5L271 347.5M271 347.5L272 350.5M271 347.5L272 346.22L275.5 344.5M272 350.5V351.5L271 351.7M272 350.5L274 354L278 351.7L278.5 353.1M272 350.5H274L279.5 347.5M267 363.5L269 363.054M267 363.5V370.5M269 363.054L272 362M269 363.054L271 367L271.485 369.25M271 351.7L272 359V362M272 362H275.5M285 331.5L282 329L279 329.25M285 331.5L284 336L283 339L284 341V342M285 331.5L290.5 335M271 331.5L276 329.5L279 329.25M271 331.5L272 334L274 336L272 339L275.5 341V344.5M275.5 344.5H279M279 329.25L278 337L279 343.125M279 343.125V344.5M279 343.125L284 342M279 344.5L279.5 347.5M284 342L285 343.125M290.5 335L294 338L298.5 333L296 329H293M290.5 335L289 337.5M293 329L289 333M293 329V325.5H295V318.5M295 318.5L299 315.5L297.5 312.5L291.786 303.5M279 354.5L275.5 357.5V362M279 354.5L278.5 353.1M279 354.5L285 355.5M275.5 362L278 360.5L276.5 363.5L278.5 365L278 366H281L285 355.5M279.5 347.5L281 349.5M281 349.5V351.7L278.5 353.1M281 349.5H282M285 343.125L285.5 346.5M285 343.125L289 337.5M285.5 346.5L283 347.5L282 349.5M285.5 346.5V348.5L287.5 349.5H290.5V345.5L289 337.5M282 349.5L284 350.5L285 353.1M285 353.1L293 355.5L295 357.5M285 353.1V355.5M251.5 90.5L232 118" stroke="#4AA366"/>
      <ellipse cx="230.5" cy="155" rx="10.5" ry="10" fill="#F99247" fill-opacity="0.5"/>
      <ellipse cx="158.5" cy="118" rx="10.5" ry="10" fill="#F99247" fill-opacity="0.5"/>
      <ellipse cx="200.5" cy="165" rx="10.5" ry="10" fill="#F99247" fill-opacity="0.5"/>
      <ellipse cx="194.5" cy="207" rx="10.5" ry="10" fill="#F99247" fill-opacity="0.5"/>
      <ellipse cx="301.5" cy="44" rx="10.5" ry="10" fill="#F99247" fill-opacity="0.5"/>
      <circle cx="158.5" cy="233.5" r="21.5" fill="#F99247"/>
      <circle cx="268" cy="204" r="15" fill="#F99247" fill-opacity="0.5"/>
      <circle cx="205" cy="380" r="15" fill="#F99247" fill-opacity="0.5"/>
      <circle cx="246" cy="270" r="15" fill="#F99247" fill-opacity="0.5"/>
      <circle cx="205" cy="270" r="15" fill="#F99247" fill-opacity="0.5"/>
      <circle cx="122" cy="197" r="15" fill="#F99247" fill-opacity="0.5"/>
      <circle cx="115" cy="240" r="15" fill="#F99247" fill-opacity="0.5"/>
      <ellipse cx="243.5" cy="37" rx="2.5" ry="3" fill="#F99247"/>
      <ellipse cx="158.5" cy="322" rx="2.5" ry="3" fill="#F99247"/>
      <ellipse cx="250.5" cy="57" rx="2.5" ry="3" fill="#F99247"/>
      <ellipse cx="270.5" cy="63" rx="2.5" ry="3" fill="#F99247"/>
      <ellipse cx="72.5" cy="288" rx="2.5" ry="3" fill="#F99247"/>
      <ellipse cx="90.5" cy="225" rx="2.5" ry="3" fill="#F99247"/>
      <ellipse cx="171.5" cy="197" rx="2.5" ry="3" fill="#FF5A5A"/>
      <ellipse cx="247.5" cy="182" rx="2.5" ry="3" fill="#FF5A5A"/>
      <ellipse cx="210.5" cy="243" rx="2.5" ry="3" fill="#FF5A5A"/>
      <ellipse cx="161.5" cy="272" rx="2.5" ry="3" fill="#FF5A5A"/>
      <rect x="0.5" y="8.5" width="15" height="15" rx="4.5" fill="#F99247" stroke="#F99247"/>
      <path d="M29.776 20.108C28.92 20.108 28.188 19.932 27.58 19.58C26.972 19.228 26.504 18.728 26.176 18.08C25.856 17.424 25.696 16.652 25.696 15.764C25.696 14.876 25.856 14.108 26.176 13.46C26.504 12.812 26.972 12.312 27.58 11.96C28.188 11.608 28.92 11.432 29.776 11.432C30.352 11.432 30.888 11.524 31.384 11.708C31.888 11.884 32.308 12.14 32.644 12.476L32.212 13.472C31.844 13.144 31.464 12.908 31.072 12.764C30.688 12.612 30.268 12.536 29.812 12.536C28.9 12.536 28.204 12.816 27.724 13.376C27.244 13.936 27.004 14.732 27.004 15.764C27.004 16.796 27.244 17.596 27.724 18.164C28.204 18.724 28.9 19.004 29.812 19.004C30.268 19.004 30.688 18.932 31.072 18.788C31.464 18.636 31.844 18.396 32.212 18.068L32.644 19.064C32.308 19.392 31.888 19.648 31.384 19.832C30.888 20.016 30.352 20.108 29.776 20.108ZM37.4958 20.108C36.6878 20.108 35.9878 19.932 35.3958 19.58C34.8038 19.22 34.3438 18.716 34.0158 18.068C33.6958 17.412 33.5358 16.644 33.5358 15.764C33.5358 14.876 33.6958 14.108 34.0158 13.46C34.3438 12.812 34.8038 12.312 35.3958 11.96C35.9878 11.608 36.6878 11.432 37.4958 11.432C38.2958 11.432 38.9918 11.608 39.5838 11.96C40.1838 12.312 40.6438 12.812 40.9638 13.46C41.2918 14.108 41.4558 14.872 41.4558 15.752C41.4558 16.64 41.2918 17.412 40.9638 18.068C40.6438 18.716 40.1838 19.22 39.5838 19.58C38.9918 19.932 38.2958 20.108 37.4958 20.108ZM37.4958 19.028C38.3358 19.028 38.9878 18.744 39.4518 18.176C39.9238 17.6 40.1598 16.796 40.1598 15.764C40.1598 14.732 39.9278 13.932 39.4638 13.364C38.9998 12.796 38.3438 12.512 37.4958 12.512C36.6558 12.512 35.9998 12.796 35.5278 13.364C35.0638 13.932 34.8318 14.732 34.8318 15.764C34.8318 16.796 35.0638 17.6 35.5278 18.176C35.9998 18.744 36.6558 19.028 37.4958 19.028ZM45.6053 20L41.8733 11.54H43.2053L46.1693 18.428L49.1333 11.54H50.4053L46.6733 20H45.6053ZM51.3317 20V11.54H52.5797V20H51.3317ZM54.5309 20V11.54H57.5189C58.9109 11.54 59.9829 11.904 60.7349 12.632C61.4949 13.36 61.8749 14.404 61.8749 15.764C61.8749 17.124 61.4949 18.172 60.7349 18.908C59.9829 19.636 58.9109 20 57.5189 20H54.5309ZM55.7789 18.956H57.4469C59.5349 18.956 60.5789 17.892 60.5789 15.764C60.5789 13.644 59.5349 12.584 57.4469 12.584H55.7789V18.956ZM67.1149 20V18.956H69.0349V12.98L67.5349 13.916L67.0309 12.992L69.3949 11.54H70.2709V18.956H72.0709V20H67.1149ZM75.8943 20.108C75.4543 20.108 75.0143 20.02 74.5743 19.844C74.1423 19.668 73.7743 19.428 73.4703 19.124L73.9023 18.176C74.1983 18.464 74.5183 18.684 74.8623 18.836C75.2063 18.98 75.5543 19.052 75.9062 19.052C76.6583 19.052 77.2303 18.784 77.6223 18.248C78.0223 17.704 78.2223 16.896 78.2223 15.824V15.332C78.0623 15.82 77.7823 16.204 77.3823 16.484C76.9903 16.764 76.5303 16.904 76.0023 16.904C75.5143 16.904 75.0783 16.788 74.6943 16.556C74.3103 16.324 74.0103 16.008 73.7943 15.608C73.5783 15.2 73.4703 14.736 73.4703 14.216C73.4703 13.672 73.5863 13.192 73.8183 12.776C74.0503 12.352 74.3703 12.024 74.7783 11.792C75.1943 11.552 75.6703 11.432 76.2063 11.432C77.2303 11.432 78.0183 11.796 78.5703 12.524C79.1303 13.252 79.4103 14.272 79.4103 15.584C79.4103 17.032 79.0983 18.148 78.4743 18.932C77.8583 19.716 76.9983 20.108 75.8943 20.108ZM76.2903 15.884C76.7783 15.884 77.1743 15.728 77.4783 15.416C77.7823 15.096 77.9343 14.68 77.9343 14.168C77.9343 13.656 77.7823 13.24 77.4783 12.92C77.1743 12.592 76.7783 12.428 76.2903 12.428C75.8023 12.428 75.4063 12.592 75.1023 12.92C74.7983 13.24 74.6463 13.656 74.6463 14.168C74.6463 14.68 74.7983 15.096 75.1023 15.416C75.4063 15.728 75.8023 15.884 76.2903 15.884ZM83.3859 20L87.1539 11.54H88.1859L91.9659 20H90.6939L89.8059 17.936H85.5219L84.6459 20H83.3859ZM87.6579 12.92L85.9659 16.928H89.3859L87.6819 12.92H87.6579ZM95.4633 20.108C94.8633 20.108 94.3433 19.984 93.9033 19.736C93.4713 19.48 93.1353 19.124 92.8953 18.668C92.6553 18.204 92.5353 17.66 92.5353 17.036C92.5353 16.108 92.7993 15.376 93.3273 14.84C93.8553 14.304 94.5673 14.036 95.4633 14.036C95.8313 14.036 96.1953 14.1 96.5553 14.228C96.9153 14.356 97.2113 14.532 97.4433 14.756L97.0593 15.608C96.8353 15.4 96.5873 15.248 96.3153 15.152C96.0513 15.048 95.7993 14.996 95.5592 14.996C94.9913 14.996 94.5513 15.176 94.2393 15.536C93.9353 15.888 93.7833 16.392 93.7833 17.048C93.7833 17.704 93.9353 18.22 94.2393 18.596C94.5513 18.964 94.9913 19.148 95.5592 19.148C95.7993 19.148 96.0513 19.1 96.3153 19.004C96.5873 18.9 96.8353 18.744 97.0593 18.536L97.4433 19.4C97.2113 19.616 96.9113 19.788 96.5433 19.916C96.1833 20.044 95.8233 20.108 95.4633 20.108ZM100.993 20.108C100.257 20.108 99.7085 19.92 99.3485 19.544C98.9885 19.168 98.8085 18.624 98.8085 17.912V15.08H97.6685V14.144H98.8085V12.38H100.021V14.144H101.833V15.08H100.021V17.816C100.021 18.24 100.109 18.56 100.285 18.776C100.469 18.992 100.765 19.1 101.173 19.1C101.301 19.1 101.425 19.088 101.545 19.064C101.665 19.032 101.785 18.996 101.905 18.956L102.097 19.868C101.977 19.94 101.809 19.996 101.593 20.036C101.385 20.084 101.185 20.108 100.993 20.108ZM102.771 12.788V11.528H104.187V12.788H102.771ZM102.879 20V14.144H104.091V20H102.879ZM107.513 20L104.993 14.144H106.301L108.089 18.596L109.925 14.144H111.161L108.605 20H107.513ZM114.674 20.108C113.714 20.108 112.958 19.84 112.406 19.304C111.854 18.76 111.578 18.02 111.578 17.084C111.578 16.484 111.698 15.956 111.938 15.5C112.186 15.036 112.526 14.676 112.958 14.42C113.39 14.164 113.886 14.036 114.446 14.036C115.254 14.036 115.89 14.296 116.354 14.816C116.818 15.328 117.05 16.036 117.05 16.94V17.348H112.754C112.842 18.564 113.486 19.172 114.686 19.172C115.022 19.172 115.35 19.12 115.67 19.016C115.998 18.912 116.306 18.74 116.594 18.5L116.954 19.34C116.69 19.58 116.35 19.768 115.934 19.904C115.518 20.04 115.098 20.108 114.674 20.108ZM114.494 14.888C113.99 14.888 113.59 15.044 113.294 15.356C112.998 15.668 112.818 16.084 112.754 16.604H116.03C116.006 16.06 115.862 15.64 115.598 15.344C115.334 15.04 114.966 14.888 114.494 14.888ZM124.104 20.108C123.504 20.108 122.984 19.984 122.544 19.736C122.112 19.48 121.776 19.124 121.536 18.668C121.296 18.204 121.176 17.66 121.176 17.036C121.176 16.108 121.44 15.376 121.968 14.84C122.496 14.304 123.208 14.036 124.104 14.036C124.472 14.036 124.836 14.1 125.196 14.228C125.556 14.356 125.852 14.532 126.084 14.756L125.7 15.608C125.476 15.4 125.228 15.248 124.956 15.152C124.692 15.048 124.44 14.996 124.2 14.996C123.632 14.996 123.192 15.176 122.88 15.536C122.576 15.888 122.424 16.392 122.424 17.048C122.424 17.704 122.576 18.22 122.88 18.596C123.192 18.964 123.632 19.148 124.2 19.148C124.44 19.148 124.692 19.1 124.956 19.004C125.228 18.9 125.476 18.744 125.7 18.536L126.084 19.4C125.852 19.616 125.552 19.788 125.184 19.916C124.824 20.044 124.464 20.108 124.104 20.108ZM128.951 20.108C128.543 20.108 128.179 20.028 127.859 19.868C127.539 19.708 127.283 19.492 127.091 19.22C126.907 18.948 126.815 18.64 126.815 18.296C126.815 17.864 126.923 17.524 127.139 17.276C127.363 17.028 127.727 16.848 128.231 16.736C128.743 16.624 129.431 16.568 130.295 16.568H130.703V16.256C130.703 15.8 130.607 15.472 130.415 15.272C130.223 15.072 129.907 14.972 129.467 14.972C129.131 14.972 128.795 15.024 128.459 15.128C128.123 15.224 127.779 15.38 127.427 15.596L127.055 14.744C127.359 14.528 127.739 14.356 128.195 14.228C128.651 14.1 129.087 14.036 129.503 14.036C130.303 14.036 130.895 14.228 131.279 14.612C131.663 14.988 131.855 15.58 131.855 16.388V20H130.715V19.028C130.571 19.364 130.347 19.628 130.043 19.82C129.739 20.012 129.375 20.108 128.951 20.108ZM129.191 19.244C129.623 19.244 129.983 19.092 130.271 18.788C130.559 18.484 130.703 18.1 130.703 17.636V17.312H130.307C129.723 17.312 129.263 17.34 128.927 17.396C128.599 17.452 128.363 17.548 128.219 17.684C128.083 17.812 128.015 17.992 128.015 18.224C128.015 18.528 128.119 18.776 128.327 18.968C128.535 19.152 128.823 19.244 129.191 19.244ZM135.576 20.108C135.096 20.108 134.648 20.048 134.232 19.928C133.816 19.8 133.468 19.624 133.188 19.4L133.536 18.584C133.832 18.792 134.156 18.952 134.508 19.064C134.868 19.176 135.228 19.232 135.588 19.232C136.012 19.232 136.332 19.156 136.548 19.004C136.764 18.852 136.872 18.648 136.872 18.392C136.872 18.184 136.8 18.024 136.656 17.912C136.512 17.792 136.296 17.7 136.008 17.636L134.868 17.408C133.86 17.2 133.356 16.68 133.356 15.848C133.356 15.296 133.576 14.856 134.016 14.528C134.456 14.2 135.032 14.036 135.744 14.036C136.152 14.036 136.54 14.096 136.908 14.216C137.284 14.336 137.596 14.516 137.844 14.756L137.496 15.572C137.256 15.364 136.98 15.204 136.668 15.092C136.356 14.98 136.048 14.924 135.744 14.924C135.328 14.924 135.012 15.004 134.796 15.164C134.58 15.316 134.472 15.524 134.472 15.788C134.472 16.188 134.736 16.444 135.264 16.556L136.404 16.784C136.924 16.888 137.316 17.064 137.58 17.312C137.852 17.56 137.988 17.896 137.988 18.32C137.988 18.88 137.768 19.32 137.328 19.64C136.888 19.952 136.304 20.108 135.576 20.108ZM142.084 20.108C141.124 20.108 140.368 19.84 139.816 19.304C139.264 18.76 138.988 18.02 138.988 17.084C138.988 16.484 139.108 15.956 139.348 15.5C139.596 15.036 139.936 14.676 140.368 14.42C140.8 14.164 141.296 14.036 141.856 14.036C142.664 14.036 143.3 14.296 143.764 14.816C144.228 15.328 144.46 16.036 144.46 16.94V17.348H140.164C140.252 18.564 140.896 19.172 142.096 19.172C142.432 19.172 142.76 19.12 143.08 19.016C143.408 18.912 143.716 18.74 144.004 18.5L144.364 19.34C144.1 19.58 143.76 19.768 143.344 19.904C142.928 20.04 142.508 20.108 142.084 20.108ZM141.904 14.888C141.4 14.888 141 15.044 140.704 15.356C140.408 15.668 140.228 16.084 140.164 16.604H143.44C143.416 16.06 143.272 15.64 143.008 15.344C142.744 15.04 142.376 14.888 141.904 14.888ZM147.834 20.108C147.354 20.108 146.906 20.048 146.49 19.928C146.074 19.8 145.726 19.624 145.446 19.4L145.794 18.584C146.09 18.792 146.414 18.952 146.766 19.064C147.126 19.176 147.486 19.232 147.846 19.232C148.27 19.232 148.59 19.156 148.806 19.004C149.022 18.852 149.13 18.648 149.13 18.392C149.13 18.184 149.058 18.024 148.914 17.912C148.77 17.792 148.554 17.7 148.266 17.636L147.126 17.408C146.118 17.2 145.614 16.68 145.614 15.848C145.614 15.296 145.834 14.856 146.274 14.528C146.714 14.2 147.29 14.036 148.002 14.036C148.41 14.036 148.798 14.096 149.166 14.216C149.542 14.336 149.854 14.516 150.102 14.756L149.754 15.572C149.514 15.364 149.238 15.204 148.926 15.092C148.614 14.98 148.306 14.924 148.002 14.924C147.586 14.924 147.27 15.004 147.054 15.164C146.838 15.316 146.73 15.524 146.73 15.788C146.73 16.188 146.994 16.444 147.522 16.556L148.662 16.784C149.182 16.888 149.574 17.064 149.838 17.312C150.11 17.56 150.246 17.896 150.246 18.32C150.246 18.88 150.026 19.32 149.586 19.64C149.146 19.952 148.562 20.108 147.834 20.108Z" fill="#65748B"/>
      <rect x="0.5" y="38.5" width="15" height="15" rx="4.5" fill="#FF5A5A" stroke="#FF5A5A"/>
      <path d="M25.984 50V41.54H31.456V42.548H27.184V45.2H31.204V46.208H27.184V48.992H31.456V50H25.984ZM32.9424 50V44.144H34.1184V45.092C34.2944 44.756 34.5384 44.496 34.8504 44.312C35.1624 44.128 35.5264 44.036 35.9424 44.036C36.8384 44.036 37.4184 44.428 37.6824 45.212C37.8664 44.844 38.1304 44.556 38.4744 44.348C38.8184 44.14 39.2104 44.036 39.6504 44.036C40.9624 44.036 41.6184 44.82 41.6184 46.388V50H40.4064V46.448C40.4064 45.952 40.3184 45.588 40.1424 45.356C39.9744 45.124 39.6944 45.008 39.3024 45.008C38.8624 45.008 38.5144 45.164 38.2584 45.476C38.0024 45.78 37.8744 46.196 37.8744 46.724V50H36.6624V46.448C36.6624 45.952 36.5784 45.588 36.4104 45.356C36.2424 45.124 35.9624 45.008 35.5704 45.008C35.1304 45.008 34.7824 45.164 34.5264 45.476C34.2784 45.78 34.1544 46.196 34.1544 46.724V50H32.9424ZM46.0609 50.108C45.1009 50.108 44.3449 49.84 43.7929 49.304C43.2409 48.76 42.9649 48.02 42.9649 47.084C42.9649 46.484 43.0849 45.956 43.3249 45.5C43.5729 45.036 43.9129 44.676 44.3449 44.42C44.7769 44.164 45.2729 44.036 45.8329 44.036C46.6409 44.036 47.2769 44.296 47.7409 44.816C48.2049 45.328 48.4369 46.036 48.4369 46.94V47.348H44.1409C44.2289 48.564 44.8729 49.172 46.0729 49.172C46.4089 49.172 46.7369 49.12 47.0569 49.016C47.3849 48.912 47.6929 48.74 47.9809 48.5L48.3409 49.34C48.0769 49.58 47.7369 49.768 47.3209 49.904C46.9049 50.04 46.4849 50.108 46.0609 50.108ZM45.8809 44.888C45.3769 44.888 44.9769 45.044 44.6809 45.356C44.3849 45.668 44.2049 46.084 44.1409 46.604H47.4169C47.3929 46.06 47.2489 45.64 46.9849 45.344C46.7209 45.04 46.3529 44.888 45.8809 44.888ZM49.7583 50V44.144H50.9343V45.188C51.2383 44.492 51.8703 44.104 52.8303 44.024L53.2263 44L53.3103 45.032L52.5783 45.104C51.5143 45.208 50.9823 45.756 50.9823 46.748V50H49.7583ZM56.8048 52.268C56.2768 52.268 55.7848 52.204 55.3288 52.076C54.8728 51.956 54.4688 51.764 54.1168 51.5L54.4888 50.636C54.8408 50.876 55.2008 51.052 55.5688 51.164C55.9368 51.276 56.3208 51.332 56.7208 51.332C57.8408 51.332 58.4008 50.772 58.4008 49.652V48.728C58.2328 49.08 57.9688 49.356 57.6088 49.556C57.2568 49.756 56.8608 49.856 56.4208 49.856C55.8928 49.856 55.4328 49.736 55.0408 49.496C54.6488 49.248 54.3448 48.908 54.1288 48.476C53.9128 48.036 53.8048 47.524 53.8048 46.94C53.8048 46.364 53.9128 45.86 54.1288 45.428C54.3448 44.988 54.6488 44.648 55.0408 44.408C55.4328 44.16 55.8928 44.036 56.4208 44.036C56.8688 44.036 57.2688 44.136 57.6208 44.336C57.9728 44.536 58.2328 44.812 58.4008 45.164V44.144H59.5768V49.508C59.5768 50.428 59.3408 51.116 58.8688 51.572C58.3968 52.036 57.7088 52.268 56.8048 52.268ZM56.7088 48.908C57.2208 48.908 57.6288 48.732 57.9328 48.38C58.2368 48.028 58.3888 47.548 58.3888 46.94C58.3888 46.332 58.2368 45.856 57.9328 45.512C57.6288 45.16 57.2208 44.984 56.7088 44.984C56.1968 44.984 55.7888 45.16 55.4848 45.512C55.1808 45.856 55.0288 46.332 55.0288 46.94C55.0288 47.548 55.1808 48.028 55.4848 48.38C55.7888 48.732 56.1968 48.908 56.7088 48.908ZM64.0258 50.108C63.0658 50.108 62.3098 49.84 61.7578 49.304C61.2058 48.76 60.9298 48.02 60.9298 47.084C60.9298 46.484 61.0498 45.956 61.2898 45.5C61.5378 45.036 61.8778 44.676 62.3098 44.42C62.7418 44.164 63.2378 44.036 63.7978 44.036C64.6058 44.036 65.2418 44.296 65.7058 44.816C66.1698 45.328 66.4018 46.036 66.4018 46.94V47.348H62.1058C62.1938 48.564 62.8378 49.172 64.0378 49.172C64.3738 49.172 64.7018 49.12 65.0218 49.016C65.3498 48.912 65.6578 48.74 65.9458 48.5L66.3058 49.34C66.0418 49.58 65.7018 49.768 65.2858 49.904C64.8698 50.04 64.4498 50.108 64.0258 50.108ZM63.8458 44.888C63.3418 44.888 62.9418 45.044 62.6458 45.356C62.3498 45.668 62.1698 46.084 62.1058 46.604H65.3818C65.3578 46.06 65.2138 45.64 64.9498 45.344C64.6858 45.04 64.3178 44.888 63.8458 44.888ZM67.7231 50V44.144H68.8991V45.116C69.0991 44.764 69.3711 44.496 69.7151 44.312C70.0671 44.128 70.4591 44.036 70.8911 44.036C72.2751 44.036 72.9671 44.82 72.9671 46.388V50H71.7551V46.46C71.7551 45.956 71.6551 45.588 71.4551 45.356C71.2631 45.124 70.9591 45.008 70.5431 45.008C70.0551 45.008 69.6631 45.164 69.3671 45.476C69.0791 45.78 68.9351 46.184 68.9351 46.688V50H67.7231ZM77.2172 50.108C76.6172 50.108 76.0972 49.984 75.6572 49.736C75.2252 49.48 74.8892 49.124 74.6492 48.668C74.4092 48.204 74.2892 47.66 74.2892 47.036C74.2892 46.108 74.5532 45.376 75.0812 44.84C75.6092 44.304 76.3212 44.036 77.2172 44.036C77.5852 44.036 77.9492 44.1 78.3092 44.228C78.6692 44.356 78.9652 44.532 79.1972 44.756L78.8132 45.608C78.5892 45.4 78.3412 45.248 78.0692 45.152C77.8052 45.048 77.5532 44.996 77.3132 44.996C76.7452 44.996 76.3052 45.176 75.9932 45.536C75.6892 45.888 75.5372 46.392 75.5372 47.048C75.5372 47.704 75.6892 48.22 75.9932 48.596C76.3052 48.964 76.7452 49.148 77.3132 49.148C77.5532 49.148 77.8052 49.1 78.0692 49.004C78.3412 48.9 78.5892 48.744 78.8132 48.536L79.1972 49.4C78.9652 49.616 78.6652 49.788 78.2972 49.916C77.9372 50.044 77.5772 50.108 77.2172 50.108ZM80.909 52.16L81.953 49.844L79.505 44.144H80.801L82.601 48.596L84.425 44.144H85.673L82.181 52.16H80.909ZM89.5878 42.788V41.528H91.0038V42.788H89.5878ZM89.6958 50V44.144H90.9078V50H89.6958ZM92.6137 50V44.144H93.7897V45.116C93.9897 44.764 94.2617 44.496 94.6057 44.312C94.9577 44.128 95.3497 44.036 95.7817 44.036C97.1657 44.036 97.8577 44.82 97.8577 46.388V50H96.6457V46.46C96.6457 45.956 96.5457 45.588 96.3457 45.356C96.1537 45.124 95.8497 45.008 95.4337 45.008C94.9457 45.008 94.5537 45.164 94.2577 45.476C93.9697 45.78 93.8257 46.184 93.8257 46.688V50H92.6137ZM102.108 50.108C101.508 50.108 100.988 49.984 100.548 49.736C100.116 49.48 99.7798 49.124 99.5398 48.668C99.2998 48.204 99.1798 47.66 99.1798 47.036C99.1798 46.108 99.4438 45.376 99.9718 44.84C100.5 44.304 101.212 44.036 102.108 44.036C102.476 44.036 102.84 44.1 103.2 44.228C103.56 44.356 103.856 44.532 104.088 44.756L103.704 45.608C103.48 45.4 103.232 45.248 102.96 45.152C102.696 45.048 102.444 44.996 102.204 44.996C101.636 44.996 101.196 45.176 100.884 45.536C100.58 45.888 100.428 46.392 100.428 47.048C100.428 47.704 100.58 48.22 100.884 48.596C101.196 48.964 101.636 49.148 102.204 49.148C102.444 49.148 102.696 49.1 102.96 49.004C103.232 48.9 103.48 48.744 103.704 48.536L104.088 49.4C103.856 49.616 103.556 49.788 103.188 49.916C102.828 50.044 102.468 50.108 102.108 50.108ZM105.021 42.788V41.528H106.437V42.788H105.021ZM105.129 50V44.144H106.341V50H105.129ZM110.279 50.108C109.767 50.108 109.315 49.988 108.923 49.748C108.539 49.5 108.239 49.148 108.023 48.692C107.807 48.236 107.699 47.696 107.699 47.072C107.699 46.448 107.807 45.912 108.023 45.464C108.239 45.008 108.539 44.656 108.923 44.408C109.307 44.16 109.759 44.036 110.279 44.036C110.719 44.036 111.111 44.132 111.455 44.324C111.799 44.516 112.055 44.776 112.223 45.104V41.54H113.435V50H112.247V48.98C112.079 49.332 111.819 49.608 111.467 49.808C111.123 50.008 110.727 50.108 110.279 50.108ZM110.591 49.172C111.087 49.172 111.487 48.992 111.791 48.632C112.095 48.272 112.247 47.752 112.247 47.072C112.247 46.392 112.095 45.876 111.791 45.524C111.487 45.164 111.087 44.984 110.591 44.984C110.087 44.984 109.683 45.164 109.379 45.524C109.075 45.876 108.923 46.392 108.923 47.072C108.923 47.752 109.075 48.272 109.379 48.632C109.683 48.992 110.087 49.172 110.591 49.172ZM117.885 50.108C116.925 50.108 116.169 49.84 115.617 49.304C115.065 48.76 114.789 48.02 114.789 47.084C114.789 46.484 114.909 45.956 115.149 45.5C115.397 45.036 115.737 44.676 116.169 44.42C116.601 44.164 117.097 44.036 117.657 44.036C118.465 44.036 119.101 44.296 119.565 44.816C120.029 45.328 120.261 46.036 120.261 46.94V47.348H115.965C116.053 48.564 116.697 49.172 117.897 49.172C118.233 49.172 118.561 49.12 118.881 49.016C119.209 48.912 119.517 48.74 119.805 48.5L120.165 49.34C119.901 49.58 119.561 49.768 119.145 49.904C118.729 50.04 118.309 50.108 117.885 50.108ZM117.705 44.888C117.201 44.888 116.801 45.044 116.505 45.356C116.209 45.668 116.029 46.084 115.965 46.604H119.241C119.217 46.06 119.073 45.64 118.809 45.344C118.545 45.04 118.177 44.888 117.705 44.888ZM121.582 50V44.144H122.758V45.116C122.958 44.764 123.23 44.496 123.574 44.312C123.926 44.128 124.318 44.036 124.75 44.036C126.134 44.036 126.826 44.82 126.826 46.388V50H125.614V46.46C125.614 45.956 125.514 45.588 125.314 45.356C125.122 45.124 124.818 45.008 124.402 45.008C123.914 45.008 123.522 45.164 123.226 45.476C122.938 45.78 122.794 46.184 122.794 46.688V50H121.582ZM130.993 50.108C130.257 50.108 129.709 49.92 129.349 49.544C128.989 49.168 128.809 48.624 128.809 47.912V45.08H127.669V44.144H128.809V42.38H130.021V44.144H131.833V45.08H130.021V47.816C130.021 48.24 130.109 48.56 130.285 48.776C130.469 48.992 130.765 49.1 131.173 49.1C131.301 49.1 131.425 49.088 131.545 49.064C131.665 49.032 131.785 48.996 131.905 48.956L132.097 49.868C131.977 49.94 131.809 49.996 131.593 50.036C131.385 50.084 131.185 50.108 130.993 50.108ZM134.931 50.108C134.451 50.108 134.003 50.048 133.587 49.928C133.171 49.8 132.823 49.624 132.543 49.4L132.891 48.584C133.187 48.792 133.511 48.952 133.863 49.064C134.223 49.176 134.583 49.232 134.943 49.232C135.367 49.232 135.687 49.156 135.903 49.004C136.119 48.852 136.227 48.648 136.227 48.392C136.227 48.184 136.155 48.024 136.011 47.912C135.867 47.792 135.651 47.7 135.363 47.636L134.223 47.408C133.215 47.2 132.711 46.68 132.711 45.848C132.711 45.296 132.931 44.856 133.371 44.528C133.811 44.2 134.387 44.036 135.099 44.036C135.507 44.036 135.895 44.096 136.263 44.216C136.639 44.336 136.951 44.516 137.199 44.756L136.851 45.572C136.611 45.364 136.335 45.204 136.023 45.092C135.711 44.98 135.403 44.924 135.099 44.924C134.683 44.924 134.367 45.004 134.151 45.164C133.935 45.316 133.827 45.524 133.827 45.788C133.827 46.188 134.091 46.444 134.619 46.556L135.759 46.784C136.279 46.888 136.671 47.064 136.935 47.312C137.207 47.56 137.343 47.896 137.343 48.32C137.343 48.88 137.123 49.32 136.683 49.64C136.243 49.952 135.659 50.108 134.931 50.108Z" fill="#65748B"/>
      </svg>
  )
})``;