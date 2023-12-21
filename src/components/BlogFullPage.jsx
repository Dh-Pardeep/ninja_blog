import React from "react";
import Full_blog_img from "../assets/webp/full_blog_img.webp";
import George_Costanza from "../assets/webp/George_Costanza.webp";
import { Link } from "react-router-dom";
const BlogFullPage = () => {
    return (
        <div className="container xl:w-[1100px] px-3 sm:px-5 xl:px-0 mx-auto">
            <div className="max-w-[800px] w-full mx-auto">
                <div className="mt-16 lg:mt-24 ">
                    <button className="  px-4 pt-1 pb-[3px] bg-light_blue text-opacity_white font-Roboto text-xsm font-semibold leading-normal rounded transition-all duration-200 ease-in-out hover:bg-white hover:text-light_blue hover:shadow-[0px_2px_6px_0px] hover:shadow-light_blue">
                        Food Theory
                    </button>
                    <h2 className="text-black text-[34px] md:text-[40px] lg:text-2xl font-Merriweather leading-normal font-bold mt-4">
                        What I Learned About Life and Food Backpacking Around Greece
                    </h2>
                    <p className="mb-5 text-gray_text font-Merriweather text-[12px] sm:text-xsm  leading-[160%]">
                        Aug 1, 2021 • 7 min read
                    </p>
                    <div className="mb-5 rounded-md overflow-hidden shadow-[0px_5px_10px_0px] shadow-[#00000080] ">
                        <img
                            className="w-full rounded-md hover:scale-105 transition-all ease-linear duration-200 min-h-[125px]"
                            src={Full_blog_img}
                            alt="Full_blog_img"
                        />
                    </div>
                    <div className=" flex items-center">
                        <img
                            className="w-11 h-11 object-cover rounded-full hover:scale-105 transition-all ease-linear duration-200 
                        "
                            src={George_Costanza}
                            alt="George Costanza"
                        />
                        <h2 className="font-bold leading-[160%] text-xsm font-Merriweather text-black ms-[14px]">
                            George Costanza
                        </h2>
                    </div>
                    <p className="text-para_gray font-Roboto text-md md:text-[23px] lg:text-xl font-medium leading-[160%] mt-5 md:mt-[30px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
                        dui diam arcu pharetra at laoreet pellentesque. Imperdiet sit ut
                        ornare nulla risus id fames nascetur urna. Eros in neque tincidunt.
                    </p>
                    <p className="text-para_gray font-Roboto text-xmd md:text-md  leading-[160%] mt-5 md:mt-[30px]">
                        Vel leo proin facilisis metus sit ut cursus sagittis. Diam donec mus
                        malesuada et ac vulputate. Aenean lacinia suspendisse et mattis
                        adipiscing id dictum commodo nunc. Feugiat lorem cras ut cras enim
                        neque, elit, facilisi habitasse. Facilisis faucibus nunc congue urna
                        diam. Vitae, diam justo, massa, elit. In et nibh ut in diam tellus
                        at tellus diam.
                    </p>
                    <div className="border rounded-md bg-medium_gray_two p-6 md:p-8  mt-7 md:mt-10">
                        <h2 className="text-black font-Merriweather font-bold text-[22px] lg:text-lg leading-[160%] mb-4">
                            In this article
                        </h2>
                        <ol className="list-decimal ms-[20px] md:ms-6">
                            <li className="mb-[15px]  text-table_color font-Merriweather text-sm md:text-xmd  leading-[160%] ">
                                <Link
                                    className=" text-table_color font-Merriweather text-sm md:text-xmd  leading-[160%] !underline "

                                >
                                    How to travel without spending a dime
                                </Link>
                            </li>
                            <li className="mb-[15px] text-table_color font-Merriweather text-sm md:text-xmd  leading-[160%] ">
                                <Link
                                    className=" text-table_color font-Merriweather text-sm md:text-xmd  leading-[160%] !underline ">
                                    Get the most out of your credit card reward points
                                </Link>
                            </li>
                            <li className=" text-table_color font-Merriweather text-sm md:text-xmd  leading-[160%] ">
                                <Link
                                    className=" text-table_color font-Merriweather text-sm md:text-xmd  leading-[160%] !underline "

                                >
                                    Why you don’t need more than 3 pieces of clothing
                                </Link>
                            </li>
                        </ol>
                    </div>
                    <p className="text-para_gray font-Roboto text-sm md:text-xmd lg:text-md  leading-[160%] mt-8 md:mt-10">
                        Amet aliquet at a aliquam ac suspendisse euismod. Lectus sit in ut
                        erat in. Et nulla a magna amet, amet. Sodales malesuada laoreet
                        bibendum neque amet turpis non. Ac arcu lacus turpis elementum
                        imperdiet. Euismod purus, libero scelerisque vitae, libero fermentum
                        urna, nunc.
                    </p>
                    <h2 className="texttable_color font-Merriweather text-[22px] lg:text-lg font-bold leading-[160%] mt-5 md:mt-[30px] mb-5">
                        How to travel without spending a dime
                    </h2>
                    <p className="text-para_gray font-Roboto text-sm md:text-xmd lg:text-md  leading-[160%]">
                        Dignissim lacus sit congue lacus aliquam. Ut non fermentum vulputate
                        donec enim sed ornare scelerisque. Sollicitudin orci leo egestas
                        fermentum platea a imperdiet nisl. Velit placerat nibh nisl ut
                        feugiat. Egestas id egestas nunc mattis. Sed mauris vitae commodo
                        pharetra, vestibulum rhoncus natoque.
                    </p>
                    <p className="text-para_gray font-Roboto text-sm md:text-xmd lg:text-md  leading-[160%] mt-5">
                        Leo id aliquet potenti enim sed maecenas sed ornare. Risus nam
                        mauris etiam nibh maecenas nibh interdum mauris suspendisse.
                        Volutpat, enim interdum facilisi mauris vitae id. Vel malesuada sit
                        etiam dolor. Ullamcorper habitant vitae, nec pretium ullamcorper
                        viverra integer praesent tincidunt. At erat sagittis tellus
                        ultricies in a.{" "}
                    </p>
                    <h2 className="texttable_color font-Merriweather text-[22px] lg:text-lg font-bold leading-[160%] mt-5 md:mt-[30px] mb-5">
                        Get the most out of your credit card reward points
                    </h2>
                    <p className="text-para_gray font-Roboto text-sm md:text-xmd lg:text-md  leading-[160%]">
                        Massa, libero morbi morbi sed non sed. In et neque lectus ultricies
                        leo eros. Auctor in elementum accumsan malesuada gravida neque
                        cursus pellentesque nunc. Dui nullam odio neque varius massa
                        praesent. Neque, porta vel, morbi nulla at tincidunt. Neque, et
                        ultrices duis fermentum, tincidunt sem sed. Erat accumsan dui enim
                        nisl morbi feugiat.
                    </p>
                    <p className="text-para_gray font-Roboto text-sm md:text-xmd lg:text-md  leading-[160%] mt-5">
                        Ac eget lorem sit nulla sed fusce etiam. Elementum nibh in eu sed.
                        Nibh non semper amet sit hac tristique orci. Quis velit vitae amet
                        magnis nec in nunc. Amet vitae id cras nibh. Sed ipsum, lacinia in
                        sit vitae. Duis luctus convallis risus purus sollicitudin purus id
                        eu. Faucibus mattis eget ullamcorper eu suspendisse elit elit lacus
                        purus. Tortor felis.
                    </p>
                    <h2 className="texttable_color font-Merriweather text-lg font-bold leading-[160%] mt-5 md:mt-[30px] mb-5">
                        Why you don’t need more than 3 pieces of clothing
                    </h2>
                    <p className="text-para_gray font-Roboto text-sm md:text-xmd lg:text-md  leading-[160%]">
                        Massa aenean cursus nulla urna dui, fermentum cursus in facilisis.
                        Vulputate euismod vestibulum dolor in elementum quis quis. Erat
                        proin in eget arcu tellus ut ultrices. Quis maecenas ullamcorper
                        ante sit leo placerat. Quisque dictum laoreet eget quam leo tortor
                        scelerisque sit nullam. Lacus, tortor, aenean mattis lobortis
                        lacinia mauris. Viverra nulla.
                    </p>
                    <p className="text-para_gray font-Roboto text-sm md:text-xmd lg:text-md  leading-[160%] mt-5">
                        Sed pellentesque quam lorem urna. Mauris donec molestie eget massa
                        pellentesque facilisis netus mauris. Magna eget eget sollicitudin at
                        faucibus odio. At augue sit nisi et metus cras dignissim vel,
                        tortor. Maecenas molestie consequat cursus posuere ultrices
                        facilisis hac bibendum semper. Sed lorem vel donec proin. Volutpat
                        aliquet rhoncus sit et.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BlogFullPage;
