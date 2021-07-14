const LandingContent = () => {
  return (
    <div className="bg-th-bkg-3 transform -skew-y-3 pt-12 md:pt-48 pb-32 lg:pb-48 mb-48 lg:mb-48 -mt-64">
      <div className="max-w-7xl mx-auto px-4 py-40 transform skew-y-3">
        <div className="max-w-2xl mb-16 mx-auto text-center">
          <h2 className="mb-8 text-4xl lg:text-5xl text-white font-bold font-heading">
            It is still the early days.
          </h2>
          <p className="mb-8 text-2xl text-gray-400">
            This is the first moment for non-developers to participate in
            helping build the Mango protocol by supporting the inception of the
            protocols Insurance Fund.
          </p>
        </div>

        {/* Section 1 */}
        <div className="flex flex-wrap overflow-hidden mb-36 xl:-mx-4">
          <div className="w-full overflow-hidden xl:my-4 xl:px-4 xl:w-1/2">
            <h2 className="text-3xl mb-6 leading-tight font-semibold font-heading">
              What is Mango?
            </h2>
            <p className="mb-8 text-gray-400 leading-relaxed">
              Mango is a decentralized autonomous organization. Its purpose is
              to contribute maximum value for the defi ecosystem and its
              developer community to create commercially viable decentralized
              trading and lending products for traders.
            </p>

            <h2 className="text-3xl mb-6 leading-tight font-semibold font-heading">
              Why the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-300 to-green-300">
                Insurance fund
              </span>
              ?
            </h2>
            <p className="mb-8 text-gray-400 leading-relaxed">
              Mango protocol is powered by lenders providing their capital for
              the community to use for trading and borrowing purposes. The
              insurance fund is the last line of defense for protecting our
              mango lenders.
            </p>
          </div>

          <div className="w-full overflow-hidden xl:my-4 xl:px-4 xl:w-1/2">
            <h2 className="text-3xl mb-6 leading-tight font-semibold font-heading">
              What is the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-300 to-green-300">
                $MNGO
              </span>{' '}
              token?
            </h2>
            <p className="mb-8 text-gray-400 leading-relaxed">
              We believe that substantial rewards to a strong developer
              community and liquidity incentives are the essential drivers for
              growth and therefore the foundation of the Mango DAO.
            </p>
            <p className="mb-8 text-gray-400 leading-relaxed">
              Mango Governance tokens ($MNGO) will serve as the incentive for
              those who can proove their work is useful to the DAO.
            </p>
            <button className="inline-flex items-center px-8 py-2 text-lg text-white font-bold bg-gradient-to-br from-yellow-200 via-lime-400 to-green-500 hover:bg-blue-600 rounded-full transition duration-200">
              <span className="pr-4">Check out the whitepaper</span>
              <svg
                width="9"
                height="16"
                viewBox="0 0 9 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1.6665L7.8963 7.99984L1 14.3332"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <p className="text-white leading-relaxed py-4">
              <span className="text-yellow-300">$MNGO</span> were only provided
              to developers who helped to build out the protocol.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="max-w-2xl mb-12 mx-auto text-center">
          <h2 className="mb-8 text-4xl lg:text-5xl text-white font-bold font-heading">
            How it works.
          </h2>
          <p className="mb-8 text-2xl text-gray-400">
            We take the view that token sales should be simple, transparent and
            minimize randomness and luck in the distribution.
          </p>
        </div>
        <section className="">
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-1 md:col-span-3 sm:col-span-3 xs:col-span-3">
              <div className="bg-th-fgd-4 bg-feature-one bg-cover bg-bottom bg-no-repeat h-650 w-full shadow-md rounded-xl overflow-hidden mx-auto">
                <div className="py-4 px-8 mt-3">
                  <div className="flex flex-col mb-8">
                    <h2 className="text-yellow-300 font-semibold text-xl tracking-wide mb-2">
                      Deposit your USDC contribution.
                    </h2>
                    <p className="text-gray-500 text-base">
                      Users deposit USDC into a vault during the event period to
                      set their contribution amount.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 md:col-span-3 sm:col-span-3 xs:col-span-3">
              <div className="bg-th-fgd-4 bg-feature-two bg-contain bg-bottom bg-no-repeat h-650 w-full shadow-md rounded-xl overflow-hidden mx-auto">
                <div className="py-4 px-8 mt-3">
                  <div className="flex flex-col mb-8">
                    <h2 className="text-yellow-300 font-semibold text-xl tracking-wide mb-2">
                      48 hour participation period.
                    </h2>
                    <p className="text-gray-500 text-base">
                      The event will span over a 2 day period split into two
                      sections,{' '}
                      <span className="text-th-green italic">Unrestricted</span>{' '}
                      and <span className="text-th-red italic">Restricted</span>
                      .
                    </p>
                    <div className="flex flex-wrap overflow-hiddenm mt-8">
                    <div className="w-full overflow-hidden lg:w-1/2 pr-4">
                      <p><span className="text-th-green italic">Unrestricted</span></p>
                      <p>During the unrestricted period users may deposit or withdraw their USDC from the vault. During the unrestricted period price can fluctuate.</p>
                    </div>

                    <div className="w-full overflow-hidden lg:w-1/2">
                      <p><span className="text-th-red italic">Restricted</span></p>
                      <p>After 24 hours deposits will be restricted and only withdrawals allowed. During the restricted period price can only goin down.</p>
                    </div>

                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="lg:col-span-2 md:col-span-3 sm:col-span-3 xs:col-span-3">
              <div className="bg-th-fgd-4 bg-feature-three bg-cover bg-bottom bg-no-repeat h-650 w-full shadow-md rounded-xl overflow-hidden mx-auto">
                <div className="py-4 px-8 mt-3">
                  <div className="flex flex-col mb-8">
                    <h2 className="text-yellow-300 font-semibold text-xl tracking-wide mb-2">
                      Why does it work this way?
                    </h2>
                    <p className="text-gray-500 text-base mb-4">
                      Simple mechanisms are easier to build, explain, understand
                      and are harder to exploit. A transparent mechanism
                      increases participation because buyers are more confident
                      there are no hidden tricks that could harm them.
                    </p>
                    <p className="text-gray-500 text-base mb-4">
                      Elements of luck engineered into the mechanism distribute
                      value randomly to those, who are most willing to do the
                      arbitrary, worthless tasks to get the free value.
                    </p>
                    <p className="text-white font-bold leading-relaxed">
                      We believe all &quot;excess&quot; value should be captured
                      by token holders in the DAO.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1 md:col-span-3 sm:col-span-3 xs:col-span-3">
              <div className="bg-th-fgd-4 bg-feature-four bg-cover bg-bottom bg-no-repeat h-650 w-full shadow-md rounded-xl overflow-hidden mx-auto">
                <div className="py-4 px-8 mt-3">
                  <div className="flex flex-col mb-8">
                    <h2 className="text-yellow-300 font-semibold text-xl tracking-wide mb-2">
                      MNGO unlocked and distributed.
                    </h2>
                    <p className="text-gray-500 text-base">
                      At event conclusion $MNGO gets distributed in propotion to
                      a users USDC contribution.{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default LandingContent
