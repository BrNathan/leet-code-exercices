/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function splitListToParts(head: ListNode | null, k: number): Array<ListNode | null> {
	let listNodeResult: Array<ListNode | null> = [];

	const listLength = GetListNodeLenth(head);
	const resteOfDivision = listLength % k;

	const numberOfNodeByPart = resteOfDivision == 0 ? listLength / k : (Math.floor(listLength / k) + 1);
	const numberOfNodeByNotCompletePart = resteOfDivision == 0 ? numberOfNodeByPart : (numberOfNodeByPart - 1);

	let tmp1 = head;
	let tmp2 = tmp1;
	let tmp3 = tmp1;
	// complete part
	for (let index = 0; index < resteOfDivision; index++) {
		for (let j = 0; j < numberOfNodeByPart; j++) {
			tmp3 = tmp3.next;
			if (j != 0) {
				tmp2 = tmp2.next;
			}
		}

		tmp2.next = null;
		listNodeResult.push(tmp1);
		tmp1 = { ...tmp3 };
		tmp2 = tmp1;
		tmp3 = tmp1;
	}

	// not complete part
	for (let index = resteOfDivision; index < k; index++) {
		if (numberOfNodeByNotCompletePart == 0) {
			listNodeResult.push(null);
		}
		else {
			for (let j = 0; j < numberOfNodeByNotCompletePart; j++) {
				console.log("in first j")
				tmp3 = tmp3.next;
				if (j != 0) {
					tmp2 = tmp2.next;
				}
			}

			tmp2.next = null;
			listNodeResult.push(tmp1);
			tmp1 = { ...tmp3 };
			tmp2 = tmp1;
			tmp3 = tmp1;
		}
	}

	return listNodeResult;
};

function GetListNodeLenth(head: ListNode): number {
	let length = 0

	let notEndOfList = true;
	let currentNode = head;
	while (notEndOfList) {
		if (currentNode == null) {
			notEndOfList = false;
		}
		else {
			length++;
			currentNode = currentNode.next;
		}
	}

	return length;
}

function displayListNode(node: ListNode): string {
	let result = "";
	let notEndOfList = true;
	let currentNode = node;
	while (notEndOfList) {
		if (currentNode == null) {
			result += "null"
			notEndOfList = false;
		}
		else {
			result += currentNode.val.toString() + "--->";
			currentNode = currentNode.next;
		}
	}

	return result;
}

class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = (val === undefined ? 0 : val)
		this.next = (next === undefined ? null : next)
	}
}