import SectionHeaders from "../../../components/sectionHeaders";
import MemberCard from "./memberCards";
import BoardMemberImage from "../../../assets/images/board-member1.jpeg";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const BoardMembers = () => {
  return (
    <section className="pt-[73px] ">
      <div className="container relative">
        <SectionHeaders subTitle="our board" title="PFAG board members" />

        {/* PREVIOUS BUTTON */}
        <div className="absolute top-1.5 right-3 z-10 cursor-pointer hover:fill-[#f2cb00] transition-all swiper-button-next-custom group md:w-9 md:h-[40px] bg-[#616161] flex justify-center items-center mr-7">
          <GrPrevious color="#fff" />
        </div>

        {/* NEXT BUTTON */}
        <div className="absolute top-1.5 right-0 z-10 cursor-pointer hover:fill-[#f2cb00] transition-all swiper-button-next-custom group md:w-9 md:h-[40px] bg-[#616161] flex justify-center items-center">
          <GrNext color="#fff" />
        </div>

        <div className="flex justify-start gap-8">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            speed={800}
            delay="2500"
            autoplay={{
              delay: 1500,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            effect="slide"
            grabCursor={true} // Visual feedback
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 4 },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <MemberCard
                memberImage={BoardMemberImage}
                teamMemberName="Mohammed Salim"
                positionOfMember="Chief Executive Officer"
              />
            </SwiperSlide>
            <SwiperSlide>
              <MemberCard
                memberImage={BoardMemberImage}
                teamMemberName="Mohammed Salim"
                positionOfMember="Chief Executive Officer"
              />
            </SwiperSlide>
            <SwiperSlide>
              <MemberCard
                memberImage={BoardMemberImage}
                teamMemberName="Mohammed Salim"
                positionOfMember="Chief Executive Officer"
              />
            </SwiperSlide>
            <SwiperSlide>
              <MemberCard
                memberImage={BoardMemberImage}
                teamMemberName="Mohammed Salim"
                positionOfMember="Chief Executive Officer"
              />
            </SwiperSlide>
            <SwiperSlide>
              <MemberCard
                memberImage={BoardMemberImage}
                teamMemberName="Mohammed Salim"
                positionOfMember="Chief Executive Officer"
              />
            </SwiperSlide>
            <SwiperSlide>
              <MemberCard
                memberImage={BoardMemberImage}
                teamMemberName="Mohammed Salim"
                positionOfMember="Chief Executive Officer"
              />
            </SwiperSlide>
            <SwiperSlide>
              <MemberCard
                memberImage={BoardMemberImage}
                teamMemberName="Mohammed Salim"
                positionOfMember="Chief Executive Officer"
              />
            </SwiperSlide>
            <SwiperSlide>
              <MemberCard
                memberImage={BoardMemberImage}
                teamMemberName="Mohammed Salim"
                positionOfMember="Chief Executive Officer"
              />
            </SwiperSlide>
            <SwiperSlide>
              <MemberCard
                memberImage={BoardMemberImage}
                teamMemberName="Mohammed Salim"
                positionOfMember="Chief Executive Officer"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BoardMembers;
