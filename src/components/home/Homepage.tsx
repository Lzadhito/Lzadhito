export default function Homepage() {
  return (
    <div class="space-y-16">
      <div id="megatron" class="grid grid-cols-2 w-full h-[85vh] gap-32 items-center justify-center">
        <div>
          <h1>Laksamana Adhito</h1>
          <h3 class="font-thin">
            Hi! I'm a Software Engineer with a strong focus on product delivery and quality. Skilled in selecting the
            most suitable technologies for specific use cases and developing solutions with an emphasis on speed,
            maintainability, and performance.
          </h3>
        </div>
        <ul class="menu rounded-box max-w-xl ">
          <JobRow company="PrimaKu" role="Lead Frontend Engineer" isActive />
          <JobRow company="Kargo Technologies" role="Senior Frontend Engineer - SDE 2b" />
          <JobRow company="Tokopedia" role="Web Platform Engineer" />
          <JobRow company="Ecomindo" role="Associate Programmer" />
        </ul>
      </div>
      <div>
        <h1>What do I do professionally?</h1>
        <div class="grid grid-cols-4 gap-16">
          <JobCard description="" title="Primacare" />
          <JobCard description="" title="PrimaKu" />
          <JobCard description="" title="PrimaKu Dash Book Vaccine" />
          <JobCard description="" title="Kargo WA Bot" />
          <JobCard description="" title="Transporter App RN" />
          <JobCard description="" title="Goakal" />
          <JobCard description="" title="Kargo Vendor" />
          <JobCard description="" title="Brokerage - Transportation Management System" />
          <JobCard description="" title="Nexus" />
          <JobCard description="" title="TMS Structure Standardization" />
          <JobCard description="" title="UT Portal & UT Connect" />
          <JobCard description="" title="Tarbiyyah Sunnah Learning Mobile" />
        </div>
      </div>
    </div>
  );
}

type JobRowProps = { company: string; role: string; isActive?: boolean };
function JobRow(props: JobRowProps) {
  return (
    <li class="">
      <div class={`flex text-right ${props.isActive ? "active" : ""}`}>
        <div class="text-base">{props.company}</div>
        <div class="flex-1">{props.role}</div>
      </div>
    </li>
  );
}

type JobCardProps = { title: string; description: string };
function JobCard(props: JobCardProps) {
  return (
    <a href="/job/:id" class="no-underline ">
      <div class="card hover:scale-110 duration-100 bg-base-100 max-h-[45vh] w-full shadow-xl">
        <figure class="w-full min-h-40 h-40">
          <img
            class="object-cover"
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div class="card-body pt-0 overflow-hidden">
          <h4>{props.title}</h4>
          <p class="text-wrap font-normal">
            {props.description} dut dut si gendut si musa gendut musa gendut musa gendut isa lebih gendut gendutnya
            gendut banget all gendut yeah
          </p>
        </div>
      </div>
    </a>
  );
}
