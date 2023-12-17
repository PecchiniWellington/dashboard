import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../components/Buttons/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionContainerRow from "../../../components/SectionContainer/SectionContainerRow/SectionContainerRow";

function ButtonsIconsPost() {
  return (
    <>
      <SectionContainerRow title="Post icon full">
        <Button
          type="button"
          postIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="primary"
        >
          Primary
        </Button>
        <Button
          type="button"
          postIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="secondary"
        >
          Secondary
        </Button>
        <Button
          type="button"
          postIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="success"
        >
          Success
        </Button>
        <Button
          type="button"
          postIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="warning"
        >
          Warning
        </Button>
        <Button
          type="button"
          postIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="error"
        >
          Error
        </Button>
        <Button
          type="button"
          postIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="info"
        >
          Info
        </Button>
        <Button
          type="button"
          postIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="light"
        >
          Light
        </Button>
        <Button
          type="button"
          postIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="dark"
        >
          Dark
        </Button>
      </SectionContainerRow>

      <SectionContainerRow title="Post icon outline">
        <Button
          type="button"
          postIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="primaryOutline"
        >
          Primary
        </Button>
        <Button
          type="button"
          postIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="secondaryOutline"
        >
          Secondary
        </Button>
        <Button
          type="button"
          postIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="successOutline"
        >
          Success
        </Button>
        <Button
          type="button"
          postIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="warningOutline"
        >
          Warning
        </Button>
        <Button
          type="button"
          postIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="errorOutline"
        >
          Error
        </Button>
        <Button
          type="button"
          postIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="infoOutline"
        >
          Info
        </Button>
        <Button
          type="button"
          postIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="lightOutline"
        >
          Light
        </Button>
        <Button
          type="button"
          postIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="darkOutline"
        >
          Dark
        </Button>
      </SectionContainerRow>
    </>
  );
}

export default ButtonsIconsPost;
