import { createSignal,  Switch, Match } from "solid-js";
import { Motion } from "solid-motionone";
import type { Component } from "solid-js";

//Types
type ClickEventHandler = (event: MouseEvent) => void;

const EditComponent: Component<{ editClickedHandler: ClickEventHandler }> = (props) => {
  
  return (
    <div
        onclick={props.editClickedHandler}
        class="flex gap-[4px] items-center justify-center p-[8px] bg-[#F5F5F5] w-[64px] h-[36px] rounded-[32px] cursor-pointer"
      >
        <span class="stroke-[#1d1d1f]">
        <svg xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none">
            <path
                d="M16.3483 17.7083C16.3483 14.7067 13.0017 12.2667 10 12.2667C6.99834 12.2667 3.65167 14.7067 3.65167 17.7083M10 9.54666C10.9621 9.54666 11.8847 9.16448 12.565 8.48419C13.2453 7.8039 13.6275 6.88123 13.6275 5.91916C13.6275 4.95708 13.2453 4.03442 12.565 3.35413C11.8847 2.67384 10.9621 2.29166 10 2.29166C9.03793 2.29166 8.11526 2.67384 7.43498 3.35413C6.75469 4.03442 6.37251 4.95708 6.37251 5.91916C6.37251 6.88123 6.75469 7.8039 7.43498 8.48419C8.11526 9.16448 9.03793 9.54666 10 9.54666Z"
                stroke="inherit"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
            </path>
        </svg>
        </span>
        <p class="text-[13px] leading-[130%] font-[500]">Edit</p>
    </div>
  );
};

const ArrowComponent: Component<{ clickedHandler: ClickEventHandler }> = (props) => {
  
  return (
    <Motion.span
          class="p-[8px] bg-[#f5f5f5] rounded-[32px] cursor-pointer"
          initial={{ opacity: 0.3, x: -256 }}
          onclick={props.clickedHandler}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.32, easing: "ease-out" }}
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M7.5 15L12.5 10L7.5 5"
            stroke="#1D1D1F"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
    </Motion.span>
  );
};

const NameOnCard: Component<{ changeFormType: Function }> = (props) => {
  const editClickedHandler: ClickEventHandler = () => {
    props.changeFormType("name-form");
  };

  const arrowClickedHandler: ClickEventHandler = () => {
    props.changeFormType("default");
  };

  return (
    <>
      <span class="">
        <EditComponent editClickedHandler={editClickedHandler}/>
      </span>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <g clip-path="url(#clip0_27_28)">
            <path
              d="M16.3231 9.14249C16.3231 9.14249 16.5869 10.4344 16.6462 10.705H15.4869L16.0425 9.19436C16.0356 9.20499 16.1569 8.87811 16.2262 8.67686L16.3231 9.14249ZM20 3.88874V16.1112C19.9998 16.5533 19.8242 16.9771 19.5116 17.2897C19.199 17.6023 18.7752 17.7779 18.3331 17.7781H1.66625C1.22422 17.7779 0.800337 17.6023 0.487774 17.2897C0.17521 16.9771 -0.000459962 16.5533 -0.00062561 16.1112V3.88874C-0.000459962 3.44671 0.17521 3.02283 0.487774 2.71026C0.800337 2.3977 1.22422 2.22203 1.66625 2.22186H18.3331C18.7752 2.22203 19.199 2.3977 19.5116 2.71026C19.8242 3.02283 19.9998 3.44671 20 3.88874ZM5.295 12.6112L7.48937 7.22249H6.01375L4.64937 10.9031L4.5 10.1569L4.01375 7.67749C3.93375 7.33374 3.6875 7.23624 3.38187 7.22249H1.13562L1.11125 7.32999C1.62567 7.45619 2.11912 7.65618 2.57625 7.92374L3.81937 12.6112H5.295ZM8.57312 12.6181L9.44812 7.22249H8.0525L7.18125 12.6181H8.57312ZM13.4306 10.8544C13.4375 10.24 13.0625 9.77124 12.2606 9.38561C11.7712 9.13874 11.4725 8.97249 11.4725 8.71874C11.4794 8.48936 11.7262 8.25311 12.2744 8.25311C12.6314 8.24304 12.9861 8.31309 13.3125 8.45811L13.4375 8.51686L13.6287 7.34999C13.2298 7.19724 12.806 7.11948 12.3787 7.12061C11 7.12061 10.0312 7.85686 10.0244 8.90499C10.0137 9.67936 10.7188 10.11 11.2469 10.37C11.785 10.6337 11.9694 10.8075 11.9694 11.04C11.9625 11.4012 11.5319 11.5675 11.1325 11.5675C10.5769 11.5675 10.2781 11.4806 9.82312 11.2794L9.63937 11.1925L9.445 12.4044C9.77125 12.5537 10.3756 12.6856 11.0006 12.6925C12.4656 12.6956 13.4206 11.97 13.4312 10.8525L13.4306 10.8544ZM18.3331 12.6181L17.2081 7.22249H16.1281C15.795 7.22249 15.5412 7.31999 15.3987 7.67061L13.3256 12.6187H14.7906C14.7906 12.6187 15.03 11.9519 15.0825 11.81H16.8744C16.9163 12.0012 17.0413 12.6187 17.0413 12.6187L18.3331 12.6181Z"
              fill="black"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_27_28">
              <rect width="20" height="20" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
      </span>
      <input
        placeholder="Name on card"
        class="outline-none text-[13px] leading-[20px] tracking-[-0.13px]"
        type="text"
        style="width: 176px;"
      />
      <ArrowComponent clickedHandler={arrowClickedHandler}/>
    </>
  );
};

const NameInput: Component<{ changeFormType: Function }> = (props) => {
  
    const arrowClickedHandler: ClickEventHandler = () => {
    props.changeFormType("name-card-form");
  };

  return (
    <>
      <div class="flex items-center gap-[4px]">
        <span class="stroke-[#86868B]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M16.3483 17.7083C16.3483 14.7067 13.0017 12.2667 10 12.2667C6.99834 12.2667 3.65167 14.7067 3.65167 17.7083M10 9.54666C10.9621 9.54666 11.8847 9.16448 12.565 8.48419C13.2453 7.8039 13.6275 6.88123 13.6275 5.91916C13.6275 4.95708 13.2453 4.03442 12.565 3.35413C11.8847 2.67384 10.9621 2.29166 10 2.29166C9.03793 2.29166 8.11526 2.67384 7.43498 3.35413C6.75469 4.03442 6.37251 4.95708 6.37251 5.91916C6.37251 6.88123 6.75469 7.8039 7.43498 8.48419C8.11526 9.16448 9.03793 9.54666 10 9.54666Z"
              stroke="inherit"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </span>
        <input
          placeholder="Name on card"
          class="outline-none w-[244px] text-[13px] leading-[20px] tracking-[-0.13px]"
          type="text"
          style="width: 244px;"
        />
        <ArrowComponent clickedHandler={arrowClickedHandler}/>
      </div>
    </>
  );
};

const DefaultForm: Component<{ changeFormType: Function }> = (props) => {
  const editClickedHandler: ClickEventHandler = () => {
    props.changeFormType("name-form");
  };

  return (
    <>
      <EditComponent editClickedHandler={editClickedHandler}/>
      <div class="flex gap-[4px] items-center justify-center p-[8px] bg-[#F5F5F5] w-[98px] h-[36px] rounded-[32px] cursor-pointer">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clip-path="url(#clip0_27_28)">
              <path
                d="M16.3231 9.14249C16.3231 9.14249 16.5869 10.4344 16.6462 10.705H15.4869L16.0425 9.19436C16.0356 9.20499 16.1569 8.87811 16.2262 8.67686L16.3231 9.14249ZM20 3.88874V16.1112C19.9998 16.5533 19.8242 16.9771 19.5116 17.2897C19.199 17.6023 18.7752 17.7779 18.3331 17.7781H1.66625C1.22422 17.7779 0.800337 17.6023 0.487774 17.2897C0.17521 16.9771 -0.000459962 16.5533 -0.00062561 16.1112V3.88874C-0.000459962 3.44671 0.17521 3.02283 0.487774 2.71026C0.800337 2.3977 1.22422 2.22203 1.66625 2.22186H18.3331C18.7752 2.22203 19.199 2.3977 19.5116 2.71026C19.8242 3.02283 19.9998 3.44671 20 3.88874ZM5.295 12.6112L7.48937 7.22249H6.01375L4.64937 10.9031L4.5 10.1569L4.01375 7.67749C3.93375 7.33374 3.6875 7.23624 3.38187 7.22249H1.13562L1.11125 7.32999C1.62567 7.45619 2.11912 7.65618 2.57625 7.92374L3.81937 12.6112H5.295ZM8.57312 12.6181L9.44812 7.22249H8.0525L7.18125 12.6181H8.57312ZM13.4306 10.8544C13.4375 10.24 13.0625 9.77124 12.2606 9.38561C11.7712 9.13874 11.4725 8.97249 11.4725 8.71874C11.4794 8.48936 11.7262 8.25311 12.2744 8.25311C12.6314 8.24304 12.9861 8.31309 13.3125 8.45811L13.4375 8.51686L13.6287 7.34999C13.2298 7.19724 12.806 7.11948 12.3787 7.12061C11 7.12061 10.0312 7.85686 10.0244 8.90499C10.0137 9.67936 10.7188 10.11 11.2469 10.37C11.785 10.6337 11.9694 10.8075 11.9694 11.04C11.9625 11.4012 11.5319 11.5675 11.1325 11.5675C10.5769 11.5675 10.2781 11.4806 9.82312 11.2794L9.63937 11.1925L9.445 12.4044C9.77125 12.5537 10.3756 12.6856 11.0006 12.6925C12.4656 12.6956 13.4206 11.97 13.4312 10.8525L13.4306 10.8544ZM18.3331 12.6181L17.2081 7.22249H16.1281C15.795 7.22249 15.5412 7.31999 15.3987 7.67061L13.3256 12.6187H14.7906C14.7906 12.6187 15.03 11.9519 15.0825 11.81H16.8744C16.9163 12.0012 17.0413 12.6187 17.0413 12.6187L18.3331 12.6181Z"
                fill="black"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_27_28">
                <rect width="20" height="20" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </span>
        <p class="text-[13px] leading-[130%]">1896</p>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M12.5 5.00001L15 7.50001M10.8333 16.6667H17.5M4.16668 13.3333L3.33334 16.6667L6.66668 15.8333L16.3217 6.17835C16.6341 5.8658 16.8097 5.44195 16.8097 5.00001C16.8097 4.55807 16.6341 4.13423 16.3217 3.82168L16.1783 3.67835C15.8658 3.36589 15.442 3.19037 15 3.19037C14.5581 3.19037 14.1342 3.36589 13.8217 3.67835L4.16668 13.3333Z"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </span>
      </div>
      <div class="flex gap-[10px] text-[13px] pt-[2px] leading-[20px] tracking-[-0.13px]">
        <input
          class="outline-none overflow-hidden w-[40px]"
          maxlength="5"
          value="02/25"
        />
        <input
          class="outline-none overflow-hidden w-[30px]"
          maxlength="3"
          value="689"
        />
        <input
          class="outline-none overflow-hidden w-[45px]"
          maxlength="5"
          value="78590"
        />
      </div>
    </>
  );
};

export default function App() {
  const [formType, setFormType] = createSignal("default");

  return (
    <div class="flex items-center gap-[4px] rounded-[32px] border border-[#1d1d1f14] p-[8px] w-[328px] h-[52px]">
      <Switch>
        <Match when={formType() === "default"}>
          <DefaultForm changeFormType={setFormType} />
        </Match>
        <Match when={formType() === "name-form"}>
          <NameInput changeFormType={setFormType} />
        </Match>
        <Match when={formType() === "name-card-form"}>
          <NameOnCard changeFormType={setFormType} />
        </Match>
      </Switch>
    </div>
  );
}
