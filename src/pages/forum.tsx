import PageHeader from "@/components/PageHeader";

const Forum = () => {
  return (
    <div>
      <PageHeader
        headingFirst="Community"
        headingSecond="Forum"
        description="Connect, share, and learn from fellow riders"
      />
      <div className="py-20 text-center text-2xl font-semibold">
        No discussions available right now. stay tuned!
      </div>
    </div>
  );
};

export default Forum;
