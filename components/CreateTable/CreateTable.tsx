import { useState, ChangeEvent } from "react";
import styles from "./createtable.module.css";
import Link from "next/link";
import Popover from "../Popover/Popover";

interface props {
  data: Record<string, any>[] | null;
  heading: string[] | null;
}
const CreateTable = ({ data, heading }: props) => {
  const [selectedTags, setSelectedTags] = useState<Record<number, string[]>>(
    {}
  );
  const handleSelectChange = (rowIndex: number, value: string) => {
    const newValue = value;

    setSelectedTags((prev: Record<number, string[]>) => {
      return {
        ...prev,
        [rowIndex]: prev[rowIndex]
          ? Array.from(new Set([...prev[rowIndex], newValue]))
          : [newValue],
      };
    });
  };
  function deleteTag(e: any, row: number) {
    setSelectedTags((prev: Record<number, string[]>) => {
      return {
        ...prev,
        [row]: prev[row].filter((value: string) => value !== e.target.id),
      };
    });
  }
  return (
    <div className={styles.table}>
      <h1>Uploads</h1>
      <table className={styles.tablecontents}>
        <tr className={styles.column}>
          {heading &&
            heading.map((data: string) => {
              return (
                <td key={data} className={styles.td}>
                  {data}
                </td>
              );
            })}
        </tr>
        {data?.map((row: Record<string, any>, i: number) => {
          return (
            <tr className={styles.row} key={i}>
              <td className={styles.td}>{row.id}</td>
              <td className={styles.td}>
                <Link
                  target="_blank"
                  href={"https://" + row.links}
                  rel="noopener noreferrer"
                >
                  {row.links}
                </Link>
              </td>
              <td className={styles.td}>{row.prefix}</td>
              {/* //select tags */}
              <td className={styles.td}>
                {" "}
                <Popover
                  data={row["select tags"]?.split(",")}
                  handelChange={handleSelectChange}
                  index={i}
                />
              </td>
              {/* //selected tags */}
              <td className={styles.std}>
                {selectedTags[i + 1]?.map((tag: string) => {
                  return (
                    <p key={tag} className={styles.tag}>
                      {tag}
                      <span
                        id={tag}
                        defaultValue={tag}
                        onClick={(e) => {
                          deleteTag(e, i + 1);
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        &nbsp; X
                      </span>
                    </p>
                  );
                })}
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default CreateTable;
