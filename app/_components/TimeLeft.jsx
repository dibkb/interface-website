{visible && (
    <motion.div
      exit={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 0.1 }}
      className="w-full py-2 text-xs lg:text-sm flex justify-between px-5 lg:px-5 items-center bg-primary-green font-medium"
    >
      <div className="block"></div>
      <Link
        href={"https://cal.com/rebhav-bharadwaj/introductory-chat"}
        target="_blank"
      >
        <div className="text-center text-xs lg:text-lg inline-flex items-center gap-2 px-4">
          ⚠️ {timeLeft} : Time left to claim last 18 months of refunds
          before new reimbursement policy
          {/* <ArrowLineUpRight /> */}
        </div>
      </Link>
      <div
        role="button"
        onClick={() => {
          setVisible(false);
        }}
      >
        <X size={20} />
      </div>
    </motion.div>
  )}